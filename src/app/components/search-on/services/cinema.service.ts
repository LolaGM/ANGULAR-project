import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { apiKey } from '../../../../config';

import { Actor } from '../interfaces/actors.interface';
import { Director } from '../interfaces/directors.interface';
import { Movie } from '../interfaces/movies.interface';


@Injectable({
  providedIn: 'root'
})
export class CinemaService {

    private apiUrl = 'https://api.themoviedb.org/3';

    constructor(private http: HttpClient) { }

    getMoviesByQuery(query: string, page: number = 1, limit: number = 10): Observable<Movie> {
        console.log(query);
        return this.http.get<Movie>(`${this.apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}&limit=${limit}`);
    }

    getActorsByQuery(query: string, page: number = 1, limit: number = 10): Observable<Actor> {
      console.log(query);
      return this.http.get<Actor>(`${this.apiUrl}/search/person?api_key=${apiKey}&query=${query}&page=${page}&limit=${limit}`);
    }

    getDirectorsByQuery(query: string, page: number = 1, limit: number = 10): Observable<Director> {
      console.log(query);
      return this.http.get<Director>(`${this.apiUrl}/search/person?api_key=${apiKey}&query=${query}&page=${page}&limit=${limit}`);
    }

}
