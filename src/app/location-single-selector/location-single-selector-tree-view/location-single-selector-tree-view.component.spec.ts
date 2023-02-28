import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSingleSelectorTreeViewComponent } from './location-single-selector-tree-view.component';

describe('LocationSelectorTreeViewComponent', () => {
  let component: LocationSingleSelectorTreeViewComponent;
  let fixture: ComponentFixture<LocationSingleSelectorTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSingleSelectorTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSingleSelectorTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
