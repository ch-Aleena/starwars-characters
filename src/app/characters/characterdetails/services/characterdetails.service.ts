import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Characterdetails } from '../models/characterdetails';

@Injectable({
  providedIn: 'root'
})
export class CharacterdetailsService {
  private character_api_url="people/"
  constructor(private _http:HttpClient,private _api:ApiService) { }

  //retrieve character details from api call

  getcharacterdetils(uid:string){
    return this._api.get<Characterdetails>(this.character_api_url+uid)
}

}
