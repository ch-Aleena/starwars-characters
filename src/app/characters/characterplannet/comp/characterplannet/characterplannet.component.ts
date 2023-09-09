import { Component } from '@angular/core';
import { CharacterplannetService } from '../../services/characterplannet.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Characterplannet } from '../../model/characterplannet';
import { Location } from '@angular/common';

@Component({
  selector: 'app-characterplannet',
  templateUrl: './characterplannet.component.html',
  styleUrls: ['./characterplannet.component.css']
})

export class CharacterplannetComponent {
  constructor(
    private _planet:CharacterplannetService,
    private _activeroute:ActivatedRoute,
    private location:Location
    ){}

    //observable to store response
    planetdetails$:Observable<Characterplannet>|null

    ngOnInit():void{
       this._activeroute.paramMap.subscribe((params)=>{
          let pid=parseInt(params.get('id'))
          if(pid){
            this.planetdetails(pid)
          }
       })
    }

    //retrieve details of plannet from api call

    planetdetails(planet_id:number){
      this.planetdetails$=this._planet.getplanetdetails(planet_id)
    }

    //go back to previous page

    goback(){
      this.location.back()
    }
}
