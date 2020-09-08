import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchmoviesService } from 'src/app/services/fetchmovies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
i: any;
movieDetails: any;
  constructor(private router: ActivatedRoute, private fms: FetchmoviesService) { }

  ngOnInit() {
    for (this.i = 0; this.i < this.fms.listmovies.length; this.i++) {
      if (this.router.snapshot.params.id === this.fms.listmovies[this.i].imdbID) {
       this.movieDetails = this.fms.listmovies[this.i];
     }
    }

  }

}
