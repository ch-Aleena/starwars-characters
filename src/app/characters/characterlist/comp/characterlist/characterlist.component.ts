import { Component } from '@angular/core';
import { CharacterlistFilters } from '../../model/characterlist-filters';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Character, Characterlist } from '../../model/characterlist';
import { CharacterlistService } from '../../services/characterlist.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { CustomError } from 'src/app/shared/models/error-messages';
import { ErrorService } from 'src/app/shared/services/error.service';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css'],
})
export class CharacterlistComponent {
  
  constructor(
    private Char_List_Service:CharacterlistService,
    private activeRoute:ActivatedRoute,
    private route:Router,
    private _localstorage:StorageService,
    private _errors:ErrorService
    ){}

  //characters list observable to store charcterlist

  total_records$:Observable<Characterlist>


  //errors handling

  errors$:Observable<CustomError|null>|null
  
  //behaviour subject for current page

  public curent_page$:BehaviorSubject<number>=new BehaviorSubject(1)

  //behaviour subject for limit

  public per_page$:BehaviorSubject<number>=new BehaviorSubject(10)

  subscription:Subscription

    ngOnInit(): void {
    this.subscription= this.activeRoute.queryParams.subscribe((params:Params)=>{
            this.queryparams(params)
     })
    }

  
    queryparams(params:Params){
          //get query filters
          const qfilters:CharacterlistFilters=this. getqueryparamobj(params)
          console.log(qfilters)
          this.loadcharcterlist(qfilters);
    }
     //localstorage key name

     private current_page="current-page"

    //get query params

    getqueryparamobj(params:Params):CharacterlistFilters{
        const currentpage=this.getcurrentpage(params)
        this._localstorage.setitem(this.current_page,currentpage)
        this.curent_page$.next(currentpage)
        return {
          page:currentpage,
          limit:this.getCurrentPerPage(params)
        };
    }
   //get current page
   getcurrentpage(params:Params){
    if(params["page"]){
      return params["page"]
    }else{
      return this.curent_page$.value
    }
   }
  
   getCurrentPerPage(params:Params){
    return this.per_page$.value
   }
   perpagechanged(page:number){
         this.route.navigateByUrl(
          `characters?page=${page}&limit=${this.per_page$.value}`
         )
   }
  //load characterlist using filters

  loadcharcterlist(filters:CharacterlistFilters){
    this.total_records$=this.Char_List_Service.getcharacters(filters)
  }
  characterdetails(id:string){
     this.route.navigate([`characters/character/details/${id}`])
  }
  trackByCharacterId(index: number, character: Character): string {
    return character.uid;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe
  }
}
