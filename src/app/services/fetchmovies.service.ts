import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../classes/movies';


@Injectable({
  providedIn: 'root'
})
export class FetchmoviesService {
  listmovies: Movies[];
  constructor(private http: HttpClient) { }
  getMovies(str: string): Observable<any> {
    return this.http.get('https://www.omdbapi.com/?s=' + str + '&apikey=56adc35');
  }
}
