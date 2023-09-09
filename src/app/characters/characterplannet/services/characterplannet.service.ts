import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characterplannet } from '../model/characterplannet';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterplannetService {

  private plannet_url="planets/"

  constructor(private _api:ApiService) { }

  // retrieve plannet details from api call using plannet id
  getPlanetDetails(plannet_id:number):Observable<Characterplannet>{

    return this._api.get<Characterplannet>(this.plannet_url+plannet_id)

 }
}
