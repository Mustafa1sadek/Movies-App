import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router) {

    if (localStorage.getItem('userData') != null) {
      this.setUserData();
    }
  }
  data:any;
  userData = new BehaviorSubject(null)  ;

  setUserData():void{
    this.data = JSON.parse(JSON.stringify(localStorage.getItem('userData')))
    this.userData.next(this.data)
  }

  logOut():void{
    localStorage.removeItem('userData');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
