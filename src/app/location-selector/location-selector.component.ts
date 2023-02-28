import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocationSelector } from '../models/location-selector/location-selector-model';
import { LocationSelectorInfo } from '../models/locationSelectorModel';

@Component({
  selector: 'app-location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.scss']
})
export class LocationSelectorComponent implements OnInit {

  @Input() type: string = "single";

  constructor() { }

  ngOnInit(): void {
  }

  @Input() labelText: string;
  @Input() selectedLocationId: number = null;
  @Input() selectedLocationName: string = 'Select';
  @Input() public selectorDisabledLocation: boolean = false;
  @Input() public locationHierachy: LocationSelector
  @Input() hoverText: string;
  @Output() public onChange : EventEmitter<any> = new EventEmitter<any>();

  onLocationsFetched(locations: LocationSelector) {
    this.locationHierachy = locations;
    // this.doHomeLocationOperation();
    // this.doLocationSelectorOperations();
    // this.selectLocationWhenLocationSeletorChange();
  }

  public updateLocationState(dataItem:LocationSelectorInfo){
    this.onChange.emit(dataItem);
  }
}
