import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _http:HttpClient) { }
  public API_BASE_URL: string = environment.API_BASE_URL;
  //retrieve data from server
  get<T>(api_url:string, queryparams?:HttpParams){
    const API_URL=this.API_BASE_URL+api_url
    const request$=this._http.get<T>(API_URL,{params:queryparams})
    return request$;
 }  
 
}
