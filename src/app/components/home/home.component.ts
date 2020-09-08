import { Component, OnInit } from '@angular/core';
import { FetchmoviesService } from 'src/app/services/fetchmovies.service';
import { Movies } from 'src/app/classes/movies';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

lstmovies: Movies[];
  constructor(private router: Router , private fms: FetchmoviesService) { }
getValue(val: any) {
  this.fms.getMovies(val.value).subscribe(data => {
    this.lstmovies = data.Search;
    this.fms.listmovies = data.Search;
   });

}
  ngOnInit() {

  }

}
