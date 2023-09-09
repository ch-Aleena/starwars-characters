import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setitem(key:string,value:string):void{
    localStorage.setItem(key,value)
   }
   getitem(key){
     return localStorage.getItem(key)
   }
   clearall():void{
     localStorage.clear()
   }
}
