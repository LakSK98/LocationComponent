import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationMultiSelectorTreeViewComponent } from './location-multi-selector-tree-view.component';

describe('LocationMultiSelectorTreeViewComponent', () => {
  let component: LocationMultiSelectorTreeViewComponent;
  let fixture: ComponentFixture<LocationMultiSelectorTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationMultiSelectorTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationMultiSelectorTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
