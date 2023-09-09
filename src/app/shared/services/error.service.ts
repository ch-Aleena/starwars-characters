import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorCodes, ErrorMessages } from '../models/error-messages';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private _http:ApiService) { }
  
  titleCaseWord(error:string){
    if(!error) return error
     return error[0].toUpperCase + error.substr(1).toLowerCase();
  }

   

  getErrorMessages(httperror:HttpErrorResponse):string{
    switch(httperror['status']){
      case ErrorCodes.UN_AUTHORIZED:
        return ErrorMessages.UN_AUTHORIZED
      case ErrorCodes.NOT_FOUND:
        return ErrorMessages.NOT_FOUND
      default:
        return httperror.message
        ? this.titleCaseWord(httperror.message)
        : ErrorMessages.GENERAL;
    }

  }
}
