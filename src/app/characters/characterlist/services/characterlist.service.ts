import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { Characterlist } from '../model/characterlist';
import { CharacterlistFilters } from '../model/characterlist-filters';
import { ErrorService } from 'src/app/shared/services/error.service';

@Injectable({
  providedIn: 'root'
})

export class CharacterlistService {

 private characterListApiUrl='people'

  constructor(
    private readonly _api:ApiService
    ){}

  //get list of characters
  getCharacters(filters:CharacterlistFilters):Observable<Characterlist>{
    return this._api.get<Characterlist>(
     this.characterListApiUrl,
     this.urlFromFilterObject(filters)
    )
  }

  //filters for pagination
  private urlFromFilterObject(filter:CharacterlistFilters):HttpParams{
    let params=new HttpParams()

    if(filter.page!==undefined){
    params=params.set("page",filter.page.toString())
    }

    if(filter.limit!==undefined){
    params=params.set("limit",filter.limit.toString())
    }
    
    return params
  }
}
