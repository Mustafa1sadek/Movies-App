import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  imgPrefix:string = 'https://image.tmdb.org/t/p/w500';
  id:any ;
  moviedetails:any;

  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService){}

  ngOnInit(): void {


    this._ActivatedRoute.params.subscribe((id:Params)=>{
      this.id = id['id'];
    });



  // this.id = this._ActivatedRoute.snapshot.params['id'];

    this._MoviesService.getMoviesDetails(this.id).subscribe((response)=>{
      this.moviedetails = response;
    })

  }
}
