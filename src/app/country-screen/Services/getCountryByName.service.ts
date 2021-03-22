import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryNameService {
  constructor(private http: HttpClient) {}

  getCountry(name) : Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/name/' + name)
    .pipe(catchError(this.handleError));
  }
  handleError(error) {
    return throwError(error.message || "Server Error");
  }
}
