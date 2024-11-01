import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean = false;
  constructor(private _AuthService:AuthService){}


  // ngOnInit(): void {
  //   this.isLogin = false;
  //   if (localStorage.getItem('userData') != null) {
  //     this.isLogin = true;
  //   }
  //   else{
  //     this.isLogin = false;
  //   }
  // }



  ngOnInit(): void {

    this._AuthService.userData.subscribe(()=>{
      if (this._AuthService.userData.getValue() != null) {
        this.isLogin = true;
      }
      else{
        this.isLogin = false;
      }
    })
  }

  clickLogOut():void{
    this._AuthService.logOut();
  }


}
