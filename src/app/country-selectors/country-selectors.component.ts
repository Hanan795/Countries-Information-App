import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-selectors',
  templateUrl: './country-selectors.component.html',
  styleUrls: ['./country-selectors.component.css'],
})
export class CountrySelectorsComponent {
  model: any = {};

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(region) {
    this.router.navigate(['/region', region]);
  }

  keyDownFunction(event) {
    
    if (event.keyCode === 13) {
      if(event.target.value !== ""){
        this.router.navigate(['countries/', event.target.value]);
        event.target.value = ""
      }
    }
  }
}
