import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMultiSelectorComponent } from './location-multi-selector.component';

describe('LocationMultiSelectorComponent', () => {
  let component: LocationMultiSelectorComponent;
  let fixture: ComponentFixture<LocationMultiSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationMultiSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationMultiSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
