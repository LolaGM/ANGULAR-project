import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie, Result } from '../interfaces/movies.interface';

import { Observable} from 'rxjs';

import { apiKey } from '../../../../config';


@Injectable({
  providedIn: 'root'
})
export class CinemaService {

    //TODO eliminar apiKey de aquí para no subirla al repositorio: guardarla en config.ts
    private apiKey = 'f0d3a8b35c21b1eebe2cc8879b67da33';
    private apiUrl = 'https://api.themoviedb.org/3';

    constructor(private http: HttpClient) { }

    getMoviesByQuery(query: string, page:number = 1, limit: number = 10): Observable<Movie> {
        console.log(query);
        return this.http.get<Movie>(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}&limit=${limit}`);
    }

}