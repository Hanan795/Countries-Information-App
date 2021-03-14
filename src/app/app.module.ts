import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SelectionsComponent } from './countrySelections/selections.component';
import { CountriesComponent } from './countries/countries.component';
import { CountrySelectorsComponent } from './country-selectors/country-selectors.component';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SelectionsComponent,
    CountriesComponent,
    CountrySelectorsComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
