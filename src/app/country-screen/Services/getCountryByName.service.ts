import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryNameService {
  constructor(private http: HttpClient) {}

  getCountry(name) {
    return this.http.get('https://restcountries.eu/rest/v2/name/' + name);
  }
}
