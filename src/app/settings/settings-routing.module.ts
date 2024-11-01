import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  {path:'profile' , component:ProfileComponent},
  {path:'password' , component:PasswordComponent},
  {path:'log' , component:LogComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
