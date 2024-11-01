import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

Router
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor(private _AuthService:AuthService ,private _Router:Router ){}



  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null ,[Validators.required , Validators.email]),
    password:new FormControl(null ,[Validators.required , Validators.pattern(/^[A-Z]/)]),
  })


  data:any;
  dataOfLoginUser:object = {};
  users:any [] = [];
  // userData:object = {};



  ngOnInit(): void {
    let usersData = localStorage.getItem('users')
    if (usersData !== null) {
      this.users = JSON.parse(usersData);
    }
  }



  submitLogin(formInfo:FormGroup)
  {
    let message ='';

    for (let i = 0; i < this.users.length; i++) {
      if (formInfo.value.email == this.users[i].email && formInfo.value.password == this.users[i].password ) {
        this.dataOfLoginUser = this.users[i];
        message = 'success';
      }
    }

    if (message == 'success') {
      localStorage.setItem('userData' , JSON.stringify(this.dataOfLoginUser))
      this._AuthService.setUserData();
      this._Router.navigate(['/home']);

    }
    else{
      window.alert('email or password wrong')
    }
  }
}
