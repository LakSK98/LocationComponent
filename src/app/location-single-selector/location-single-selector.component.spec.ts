import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSingleSelectorComponent } from './location-single-selector.component';

describe('LocationSingleSelectorComponent', () => {
  let component: LocationSingleSelectorComponent;
  let fixture: ComponentFixture<LocationSingleSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSingleSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSingleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
