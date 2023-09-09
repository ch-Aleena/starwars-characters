import { Component } from '@angular/core';
import { Characterdetails } from '../../models/characterdetails';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { CharacterdetailsService } from '../../services/characterdetails.service';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CharacterdetailsComponent {

  //observable for character details
  characterDetails$:Observable<Characterdetails>

  //id to hold character id
  private id:string

  constructor(
    private readonly characterdetail:CharacterdetailsService,
    private readonly _activeroute:ActivatedRoute,
    private readonly _utility:UtilityService,
    private readonly _route:Router,
    private readonly storage:StorageService
    ){}

ngOnInit(){
   //activated route to extract id from url
    this._activeroute.paramMap.subscribe((params)=>{
    this.id=params.get('id')
    })

   if(this.id){
    this.characterDetails$=this.characterdetail.getCharacterDetils(this.id)
   }
}

//navigate to plannet details
palnetsdetails(url:string){
  const pid=this._utility.extractIdbyUrl(url)
  this._route.navigate([`characters/character/plannet/${pid}`])
}

//get back to character page
getbackcharacters(){
    const savedkey:string|null=this.storage.getitem("current-page")
    let url="characters"
    if(savedkey){
      url=url+  `?page=${savedkey}&limit=10`
    }
    this._route.navigateByUrl(url )
}

}
