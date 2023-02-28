import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { LocationDropDownModel } from '../models/locations-drop-down-list.model';
import { LocationSelector } from '../models/location-selector/location-selector-model';
import { LocationSelectorItem } from '../models/location-selector/location-selector-item-model';
import { LocationSelectorInfo } from '../models/locationSelectorModel';

@Component({
  selector: 'app-location-single-selector',
  templateUrl: './location-single-selector.component.html',
  styleUrls: ['./location-single-selector.component.scss']
})

export class LocationSingleSelectorComponent implements OnInit {

  public expandedKeys: any[] = [];

  public selectorOpened: boolean = false;
  public disableSelector: boolean = false;

  @Input() selectedLocationName: string = "Select";
  @Input() selectedLocationId: number = 0;

  @Input() labelText: string;
  @Input() hoverText: string;

  @Input() isIncludeFloatLocation: boolean = true;
  @Input() isDisableParentClick: boolean = false;
  @Input() page: string = "";
  @Input() hideBranchLess: boolean = false;

  @Input() selectableTypes: number[] = []; // an array of location types to be made selectable
  @Input() selectorDisabled: boolean = false;

  @Output() onChange: EventEmitter<LocationSelectorInfo> = new EventEmitter();
  @Output() onLocationsData = new EventEmitter<LocationSelector>();

  @Input() public locationHierachy: LocationSelector;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.onLocationsData.emit(this.locationHierachy);
    if (this.selectableTypes.length > 0)
      this.locationHierachy.locations[0] = this.makeSelectableByLocationType(this.locationHierachy.locations[0]);
    if (this.locationHierachy.locations.length > 0 && this.locationHierachy.locations[0].items == null) {
      this.disableSelector = true;
      this.selectedLocationName = "No branches available";
    } else if (this.selectedLocationName == null && this.selectedLocationId != null) {
      // if a location name is not passed in as an input, we set it using the locationId
      this.selectedLocationName = this.locationHierachy.locationsFlatData.find(l => l.locationId == this.selectedLocationId).locationName;
    }
    this.addExpandListItem(this.locationHierachy.locations);
    this.setDropDownState();
  }

  private makeSelectableByLocationType(locations: LocationSelectorItem) {
    locations.isSelectable = this.selectableTypes.includes(locations.locationTypeId);
    if (locations.hasChild) {
      locations.items.forEach(i => this.makeSelectableByLocationType(i));
    }
    return locations;
  }

  private setDropDownState() {
    this.disableSelector = this.selectorDisabled;
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // clicked outside => close dropdown list
      this.selectorOpened = false;
    }
  }

  public closeDropDown() {
    this.selectorOpened = false;

  }

  public onItemSelected(data: LocationSelectorInfo) {
    this.selectorOpened = false;
    this.onChange.emit(data);
    this.selectedLocationName = data.locationName;
  }

  private addExpandListItem(treeItem: LocationDropDownModel[]) {
    treeItem.forEach(item => {
      if (item.items && item.items.length > 0) {
        this.expandedKeys.push(item.locationId);
        this.addExpandListItem(item.items)
      }
    });
  }

  public locationClick() {
    if (!this.selectorDisabled) {
      this.selectorOpened = !this.selectorOpened;
    }
  }

}

