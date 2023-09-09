import { Component } from '@angular/core';
import { Characterdetails } from '../../models/characterdetails';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { CharacterdetailsService } from '../../services/characterdetails.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent {
  //observable for character details

  characterdetails$:Observable<Characterdetails>

  //id variable to hold id 

  id

  constructor(
    private characterdetail:CharacterdetailsService,
    private _activeroute:ActivatedRoute,
    private _utility:UtilityService,
    private _route:Router,
    private storage:StorageService){}

ngOnInit(){
   //activated route to extract id from url
    this._activeroute.paramMap.subscribe((params)=>{
    this.id=params.get('id')
    })
   if(this.id){
    this.characterdetails$=this.characterdetail.getcharacterdetils(this.id)
   }
}

//navigate to plannet details
palnetsdetails(url:string){
  console.log(url)
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
