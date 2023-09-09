import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Characterdetails } from '../models/characterdetails';

@Injectable({
  providedIn: 'root'
})
export class CharacterdetailsService {

  private characterApiUrl="people/"

  constructor(
    private readonly _http:HttpClient,
    private readonly _api:ApiService
  ) { }

  //retrieve character details from api call
  getCharacterDetils(uid:string){
      return this._api.get<Characterdetails>(this.characterApiUrl+uid)
  }

}
