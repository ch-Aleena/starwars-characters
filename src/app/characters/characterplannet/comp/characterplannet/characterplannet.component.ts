import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CharacterplannetService } from '../../services/characterplannet.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Characterplannet } from '../../model/characterplannet';
import { Location } from '@angular/common';

@Component({
  selector: 'app-characterplannet',
  templateUrl: './characterplannet.component.html',
  styleUrls: ['./characterplannet.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class CharacterplannetComponent {
  constructor(
    private readonly _planet:CharacterplannetService,
    private readonly _activeroute:ActivatedRoute,
    private readonly location:Location
    ){}

    //observable to store response
    planetDetails$:Observable<Characterplannet>|null

    ngOnInit():void{
       //retrieve plannet id from url
       this._activeroute.paramMap.subscribe((params)=>{
          let pid=parseInt(params.get('id'))
          if(pid){
            this.getplanetDetails(pid)
          }
       }
       );
    }

    //retrieve details of plannet from api call
    getplanetDetails(planet_id:number){
      this.planetDetails$=this._planet.getPlanetDetails(planet_id)
    }

    //go back to previous page
    goback(){
      this.location.back()
    }
}
