import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { RegionCountriesComponent } from './region-countries/region-countries.component';

export const routingTable = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: CountriesComponent },
  { path: ':name', component: CountryComponent },
  { path: 'region/:region', component: RegionCountriesComponent },
  // { path: '**', component: FourOhFourComponent },
];
