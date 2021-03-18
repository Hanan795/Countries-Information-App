import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  constructor(private http: HttpClient) {}

  getRegion(region) {
    return this.http.get('https://restcountries.eu/rest/v2/region/' + region);
  }
}
