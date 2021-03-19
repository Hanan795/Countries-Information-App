import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CountriesComponent } from './countries/countries.component';
import { CountrySelectorsComponent } from './country-selectors/country-selectors.component';
import { CountryComponent } from './country/country.component';
import { RouterModule } from '@angular/router'
import { routingTable } from './routes';
import { RegionCountriesComponent } from './region-countries/region-countries.component';
import { CountryScreenComponent } from './country-screen/country-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CountriesComponent,
    CountrySelectorsComponent,
    CountryComponent,
    RegionCountriesComponent,
    CountryScreenComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, RouterModule.forRoot(routingTable)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
