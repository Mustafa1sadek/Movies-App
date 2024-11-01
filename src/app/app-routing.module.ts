import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MoviesComponent } from './movies/movies.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TvComponent } from './tv/tv.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NotFoundComponent } from './not-found/not-found.component';
MoviedetailsComponent
const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full' },

  {path:'home' , canActivate:[AuthGuard], component:HomeComponent},
  {path:'about', canActivate:[AuthGuard] , component:AboutComponent},
  {path:'gallery', canActivate:[AuthGuard] , component:GalleryComponent},
  {path:'contacts' , canActivate:[AuthGuard] , component:ContactsComponent},
  {path:'tv', canActivate:[AuthGuard] , component:TvComponent},
  {path:'movies' , canActivate:[AuthGuard] , component:MoviesComponent},
  {path:'Moviedetails/:id' , canActivate:[AuthGuard] , component:MoviedetailsComponent},
  {path:'settings'  , loadChildren:() => import('./settings/settings.module').then(x => x.SettingsModule) },

  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
