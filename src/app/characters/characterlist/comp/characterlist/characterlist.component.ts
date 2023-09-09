import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CharacterlistComponent {
  
  constructor(
    private readonly _characterList:CharacterlistService,
    private readonly activeRoute:ActivatedRoute,
    private readonly route:Router,
    private readonly _localstorage:StorageService,
    private readonly _errors:ErrorService

    ){}

  //characters list observable to store charcterlist
  characterList$:Observable<Characterlist>


  //errors handling
  errors$:Observable<CustomError|null>|null
  
  //behaviour subject for handling current page reactively
  public curentPage$:BehaviorSubject<number>=new BehaviorSubject(1)

  //behaviour subject for limit
  public perPage$:BehaviorSubject<number>=new BehaviorSubject(10)

  //subscription
  private subscription:Subscription

  ngOnInit(): void {
    //subscribe to query parameters
    this.subscription= this.activeRoute.queryParams.subscribe((params:Params)=>{
    this.handleQueryParams(params)
     }
     );
  }

  //handle query params of current page url
  handleQueryParams(params:Params){
          //get query filters from query params
          const queryFilters:CharacterlistFilters=this. getqueryparamobj(params)
          console.log(queryFilters)
          //load character list using queryfilters
          this.loadCharacterList(queryFilters);
  }

  //localstorage key name
  private current_page="current-page"

  //get query params and convert into characterlistfilters obj
  getqueryparamobj(params:Params):CharacterlistFilters{
        //update current page behaviour subject
        const currentpage=this.getCurrentPage(params)
        this._localstorage.setitem(this.current_page,currentpage)
        this.curentPage$.next(currentpage)
        //return query filters obj
        return {
          page:currentpage,
          limit:this.getCurrentPerPage(params)
        };
    }
   //get current page from query parameter or from behaviour subject
  getCurrentPage(params:Params){
    if(params["page"]){
      return params["page"]
    }else{
      return this.curentPage$.value
    }
   }
  
  //get items per page default value
  getCurrentPerPage(params:Params){
    return this.perPage$.value
   }

  //page change event
  perpagechanged(page:number){
         this.route.navigateByUrl(
          `characters?page=${page}&limit=${this.perPage$.value}`
         );
  }

  //load characterlist using filters
  loadCharacterList(filters:CharacterlistFilters){
    this.characterList$=this._characterList.getCharacters(filters)
  }

  //navigate to character details page for given character
  characterdetails(id:string){
     this.route.navigate([`characters/character/details/${id}`])
  }

  //track each character of array based on character uid
  trackByCharacterId(index: number, character: Character): string {
     return character.uid;
  }

  //on component destroy
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    } 
  }
}
