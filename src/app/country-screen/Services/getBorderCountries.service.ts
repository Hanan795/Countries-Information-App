import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BorderCountriesService {
  constructor(private http: HttpClient) {}
  borderCountries: any = [];
  getBorderCountries(code) {
    return this.http.get(
      'https://restcountries.eu/rest/v2/alpha?codes=' + code
    );
  }
}
