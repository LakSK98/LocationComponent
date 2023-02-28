import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { LocationSelectorInfo } from 'src/app/models/locationSelectorModel';
import { LocationMultiSelectorModel } from '../models/location-multi-selector.model';
import { LocationMultiSelector } from '../models/location-selector/location-multi-selector-model';
import { LocationDropDownModel } from '../models/locations-drop-down-list.model';

@Component({
  selector: 'app-location-multi-selector',
  templateUrl: './location-multi-selector.component.html',
  styleUrls: ['./location-multi-selector.component.scss']
})
export class LocationMultiSelectorComponent implements OnInit {

  public expandedKeys: any[] = [];
  public selectorOpened: boolean = false;
  @Input() selectedLocationName: string = "Select";
  @Input() selectedLocationId: number = 0;
  @Input() labelText: string;
  @Input() hoverText: string;
  @Input() isIncludeFloatLocation: boolean = true;
  @Input() hideBranchLess: boolean = false;
  @Input() includeInactive: boolean = false;
  @Input() isDisableParentClick: boolean = false;
  @Output() onChange: EventEmitter<LocationMultiSelectorModel[]> = new EventEmitter();
  @Input() public locationHierachy: LocationMultiSelector;

  @Input() page: string = "";
  @Input()
  public checkedKeys: any[] = [];
  @Input() selectorDisabled: boolean = false;

  @Output() onLocationsData = new EventEmitter<LocationMultiSelector>();
  selectedLocations: LocationMultiSelectorModel[] = [];

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.onLocationsData.emit(this.locationHierachy);
    this.addExpandListItem(this.locationHierachy.locations);
    this.setDefaultValue(this.checkedKeys, this.locationHierachy.locations);
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
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
  }

  public setDefaultValue(checkedKeys: number[], items: LocationMultiSelectorModel[]) {
    for (var i = 0; i < items.length; i++) {
      if (checkedKeys.indexOf(items[i].locationId) > -1) {
        if (items[i].isSelectable) {
          this.selectedLocations.push(items[i]);
          this.setDefaultValue(checkedKeys, items[i].items)
        }
      }
      else {
        this.setDefaultValue(checkedKeys, items[i].items)
      }
    }
  }

  private addExpandListItem(treeItem: LocationDropDownModel[]) {
    treeItem.forEach(item => {
      if (item.items && item.items.length > 0) {
        this.expandedKeys.push(item.locationId);
        this.addExpandListItem(item.items)
      }
    });
  }

  public handleChange(data) {
    this.checkedKeys = data;
    let locationsFlatArray = this.locationHierachy.locationsFlatData;
    let selectedLocatonsArray = locationsFlatArray.filter(item => data.indexOf(item.locationId) !== -1);
    this.selectedLocations = selectedLocatonsArray;
    this.onChange.emit(this.selectedLocations);
  }

  public locationClick() {
    this.selectorOpened = !this.selectorOpened;
  }

  public onRemove(item: LocationDropDownModel): void {
    const index = this.selectedLocations.findIndex((c) => c.locationId === item.locationId);
    const checkedKeyIndex = this.checkedKeys.findIndex(k => k == item.locationId);
    this.checkedKeys.splice(checkedKeyIndex, 1);
    this.selectedLocations.splice(index, 1);
    this.onChange.emit(this.selectedLocations);
  }

}
