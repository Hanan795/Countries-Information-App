import { CountriesComponent } from './countries/countries.component';
import { RegionCountriesComponent } from './region-countries/region-countries.component';
import { CountryScreenComponent } from './country-screen/country-screen.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routingTable = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: CountriesComponent },
  { path: 'countries/:name', component: CountryScreenComponent },
  { path: 'region/:region', component: RegionCountriesComponent },
  { path: '**', component: PageNotFoundComponent },
];
