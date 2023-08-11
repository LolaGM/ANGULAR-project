import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';


@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private apiUrl = 'https://restcountries.com/v3.1/all'; //no need for API KEY

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

}
