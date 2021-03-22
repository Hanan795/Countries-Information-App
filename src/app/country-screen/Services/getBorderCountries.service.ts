import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BorderCountriesService {
  constructor(private http: HttpClient) {}
  getBorderCountries(code): Observable<any> {
    return this.http
      .get<any>('https://restcountries.eu/rest/v2/alpha?codes=' + code)
      .pipe(catchError(this.handleError));
  }
  handleError(error) {
    return throwError(error.message || "Server Error");
  }
}
