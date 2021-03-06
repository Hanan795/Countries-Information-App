import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/getAllCountries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent {
  countries: [];
  isLoading = true;
  statusMessage = "Loading..."
  
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((countries: []) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
