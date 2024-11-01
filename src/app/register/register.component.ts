import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {

  users:any [] = [];
  listOfUsers:string = '';

  constructor(private _AuthService:AuthService ,private _Router:Router){}

  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null ,[Validators.required , Validators.minLength(3) , Validators.maxLength(10)] ),
    last_name:new FormControl(null ,[Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    age:new FormControl(null ,[Validators.required , Validators.min(16) , Validators.max(80)]),
    email:new FormControl(null ,[Validators.required , Validators.email]),
    password:new FormControl(null ,[Validators.required , Validators.pattern(/^[A-Z]/)]),
  })

  ngOnInit(): void {
    let usersData = localStorage.getItem('users')
    if (usersData !== null) {
      this.users = JSON.parse(usersData);
    }
  }

  submitRegister(formInfo:FormGroup){
    let flag = true;

    if (this.users.length == 0)
      {
        this.users.push(formInfo.value);
        localStorage.setItem("users" , JSON.stringify(this.users));
        this._Router.navigate(['/login'])
      }
    else{
      for (let i = 0; i < this.users.length; i++) {
        if (formInfo.value.email == this.users[i].email) {
          flag = false;
          break;
        }
      }
      if ( flag ) {
        this.users.push(formInfo.value);
        localStorage.setItem("users" , JSON.stringify(this.users));
        this._Router.navigate(['/login'])
      }
      else
      {
        window.alert('email is alredy registered');
      }
    }
  }


}
