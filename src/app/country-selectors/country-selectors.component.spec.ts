import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelectorsComponent } from './country-selectors.component';

describe('CountrySelectorsComponent', () => {
  let component: CountrySelectorsComponent;
  let fixture: ComponentFixture<CountrySelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrySelectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
