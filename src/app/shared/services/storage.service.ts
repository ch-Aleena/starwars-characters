import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // Set key,value pair in localStorge
  setitem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  //Get value based on key from localStorge
  getitem(key) {
    return localStorage.getItem(key);
  }

  // Clears all the values in localStorage
  clearall(): void {
    localStorage.clear();
  }
}
