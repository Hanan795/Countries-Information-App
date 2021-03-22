import { Component, OnInit } from '@angular/core';
import { RegionService } from './Services/getRegions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region-countries',
  templateUrl: './region-countries.component.html',
  styleUrls: ['./region-countries.component.css'],
})
export class RegionCountriesComponent implements OnInit {
  regionCountries: [];
  isLoading = true;
  constructor(
    private rgionService: RegionService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.rgionService
        .getRegion(params.get('region'))
        .subscribe((region: []) => {
          this.regionCountries = region;
          this.isLoading = false;
        });
    });
  }
}
