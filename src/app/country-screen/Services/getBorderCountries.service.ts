import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BorderCountriesService {
  constructor(private http: HttpClient) {}
  borderCountries:any = [];
  getBorderCountries(countries) {
    for (let i = 0; i < countries.length; i++) {
      this.borderCountries.push(this.http.get(
        'https://restcountries.eu/rest/v2/alpha?codes=' + countries[i]
      ));
    }

    return this.borderCountries
  }
}
