import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken(): boolean{

    return (window.localStorage.length > 0);
  }

  setToken(token){

    window.localStorage.setItem(KEY,token);
  }

  getToken(){

    return window.localStorage.getItem(KEY);
  }

  removeToken(){

    window.localStorage.removeItem(KEY);
  }

}
