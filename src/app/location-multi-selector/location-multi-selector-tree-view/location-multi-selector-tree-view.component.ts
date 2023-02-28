import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { LocationSelectorInfo } from 'src/app/models/locationSelectorModel';
import { LocationMultiSelectorModel } from 'src/app/models/location-multi-selector.model';
import { LocationDropDownModel } from 'src/app/models/locations-drop-down-list.model';

@Component({
  selector: 'location-multi-selector-tree-view',
  templateUrl: './location-multi-selector-tree-view.component.html',
  styleUrls: ['./location-multi-selector-tree-view.component.scss']
})
export class LocationMultiSelectorTreeViewComponent implements OnInit {


  // get root locations ids as input
  @Input() expandedKeys: any[];

  // get checked components Tree view unique id0
  @Input() selectedLocationId: number;
  // Tree view shown locations
  // public locations: Observable<LocationDropDownModel[]>;

  @Input() locations: LocationMultiSelectorModel[];
  @Output()
  closeEvent: EventEmitter<LocationSelectorInfo> = new EventEmitter<LocationSelectorInfo>();

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  public locationSelector: LocationSelectorInfo = {
    id: 0,
    locationName: null,
    locationCode: null,
    utcoffsetInMinutes: 0,
    locationTypeId: 0,
    timezoneId: null,
    timeZoneName: null,
    dropDownDisabled: null,
    lastLocationAutoWraupTime: null
  };

  // currently checked Tree view unique id
  @Input()
  public checkedKeys: any[] = [];
  ngOnChanges(changes: SimpleChanges) {
    this.checkDefaultValue(changes.checkedKeys.currentValue, this.locations);
  }
  public checkAll: boolean = true;

  // Checking component
  public key = 'locationId';
  public iterableDiffer: any;

  constructor(private cdRef: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.checkDefaultValue(this.checkedKeys, this.locations);
    this.onChange.emit(this.checkedKeys);
  }

  ngAfterContentInit() {
    this.addExpandListItem(this.locations);
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  public checkDefaultValue(checkedKeys: number[], items: LocationMultiSelectorModel[]) {
    for (var i = 0; i < items.length; i++) {
      if (checkedKeys.indexOf(items[i].locationId) > -1) {
        if (items[i].isSelectable) {
          items[i].isSelected = true;
          this.checkDefaultValue(checkedKeys, items[i].items);
        } else {
          items[i].isSelected = false;
        }
      }
      else {
        items[i].isSelected = false;
        this.checkDefaultValue(checkedKeys, items[i].items)
      }
    }
  }

  public handleCheck(dataItem: LocationMultiSelectorModel) {
    dataItem.isSelected = !dataItem.isSelected;
    this.handleChildCheck(dataItem.items, dataItem.isSelected);
    this.checkedKeys = [];
    this.checkedKeys = this.getCheckedKeys(this.locations, this.checkedKeys);
    this.onChange.emit(this.checkedKeys);
  }

  public handleChildCheck(childItems: LocationMultiSelectorModel[], isSelected: boolean) {
    for (var i = 0; i < childItems.length; i++) {
      if (childItems[i].isSelectable) {
        childItems[i].isSelected = isSelected;
        this.handleChildCheck(childItems[i].items, isSelected);
      }
    }
  }

  public unCheckAll(items: LocationMultiSelectorModel[]) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].isSelectable) {
        items[i].isSelected = false;
        this.unCheckAll(items[i].items);
      }
    }
  }

  public getCheckedKeys(items: LocationMultiSelectorModel[], keys: number[]): number[] {
    for (var i = 0; i < items.length; i++) {
      if (items[i].isSelected) {
        keys.push(items[i].locationId);
      }
      keys = this.getCheckedKeys(items[i].items, keys);
    }
    return keys;
  }

  showClick(dataItem: any) {
    this.locationSelector = {
      id: dataItem?.locationId,
      locationName: dataItem?.locationName,
      locationCode: dataItem?.locationCode,
      locationTypeId: dataItem?.locationTypeId,
      utcoffsetInMinutes: dataItem?.utcoffsetInMinutes,
      timezoneId: dataItem?.timezoneId,
      timeZoneName: dataItem?.timeZoneName,
      dropDownDisabled: null,
      lastLocationAutoWraupTime: dataItem?.lastLocationAutoWraupTime
    };
    this.closeEvent.emit(this.locationSelector);
  }

  private addExpandListItem(treeItem: LocationDropDownModel[]) {
    treeItem.forEach(item => {
      if (item.hasChild) {
        this.addExpandListItem(item.items)
      }
    });
  }

}
