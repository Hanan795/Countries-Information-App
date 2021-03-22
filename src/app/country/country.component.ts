import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  @Input() country;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  countryClicked(country) {
    this.router.navigate(['/countries', country.name]);
  }
}
