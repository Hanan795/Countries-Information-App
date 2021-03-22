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
  borderCountriesCodes = [];
  borderCountries = [];
  statusMessage = 'Loading...';
  error = false;

  constructor(
    private countryNameService: CountryNameService,
    private borderCountriesService: BorderCountriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.countryNameService.getCountry(params.get('name')).subscribe(
        (country) => {
          this.route.paramMap.subscribe(() => {
            this.borderCountriesCodes = [];
            this.borderCountriesCodes = country[0].borders;
            country[0].borders = [];
            this.borderCountriesCodes.forEach((borderCountry) => {
              this.borderCountries = [];
              this.borderCountriesService
                .getBorderCountries(borderCountry)
                .subscribe(
                  (country: []) => {
                    console.log(country);
                    this.borderCountries.push(country);
                  },
                  (error) => {
                    this.error = true;
                    this.statusMessage = 'There is an error happened!';
                    console.log(error);
                  }
                );
            });
          });
          this.selectedCountry = country[0];
        },
        (error) => {
          this.error = true;
          this.statusMessage =
            'There is no country with this name. May be you write it in wrong way. Try Again!';
          console.log(error);
        }
      );
    });
  }
}
