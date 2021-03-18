import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionCountriesComponent } from './region-countries.component';

describe('RegionCountriesComponent', () => {
  let component: RegionCountriesComponent;
  let fixture: ComponentFixture<RegionCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
