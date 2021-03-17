import { Component, OnInit } from '@angular/core';
import { CountryComponent } from '../country/country.component'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
