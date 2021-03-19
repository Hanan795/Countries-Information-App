import { Component, OnInit } from '@angular/core';
import { CountryNameService } from './Services/getCountryByName.service';
import { BorderCountriesService } from './Services/getBorderCountries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-screen',
  templateUrl: './country-screen.component.html',
  styleUrls: ['./country-screen.component.css'],
})
export class CountryScreenComponent implements OnInit {
  selectedCountry;
  borderCountriesCodes
  borderCountries

  constructor(
    private countryNameService: CountryNameService,
    private borderCountriesService: BorderCountriesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.countryNameService
        .getCountry(params.get('name'))
        .subscribe((country) => {
          this.selectedCountry = country[0];
          this.borderCountriesCodes = country[0].borders;
        });
      });
    //   this.route.paramMap.subscribe(() => {
    //   this.borderCountriesService
    //     .getBorderCountries(this.borderCountriesCodes)
    //     .subscribe((countries) => {
    //       this.borderCountries = countries
    //     })
    //     console.log("borderCountries2",this.borderCountries)
    // })
  }
}
