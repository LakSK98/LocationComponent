import { Component } from '@angular/core';
import { locationHeirarchy } from './testData';
import { LocationSelector } from './models/location-selector/location-selector-model';
import { LocationSelectorInfo } from './models/locationSelectorModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedLocationId: number = null;
  selectedLocationName: string = 'Kronos Admin';
  public selectorDisabledLocation: boolean = false;
  public locationHierachy: LocationSelector = locationHeirarchy;

  onLocationsFetched(locations: LocationSelector) {
    this.locationHierachy = locations;
    // this.doHomeLocationOperation();
    // this.doLocationSelectorOperations();
    // this.selectLocationWhenLocationSeletorChange();
  }

  //   private selectLocationWhenLocationSeletorChange() {
  //   if (this.locationId != null && this.locationId > 0) {
  //     if (this.isInitialLoad) {
  //       this.store.dispatch(DashboardActions.loadSubLocations({ signInLocationId: this.locationId, selecteLocationIds:this.locationIds}));
  //       this.isInitialLoad = false;
  //     }
  //   }
  // }

  // private doHomeLocationOperation() {
  //   if (this.locationHierachy != undefined && this.locationHierachy != null) {
  //     var homeLocation = this.locationHierachy.locationsFlatData.filter(l => l.locationId == this.locationId);
  //     var branches = this.locationHierachy.locationsFlatData.filter(l => l.locationTypeId == 5);
  //     if (homeLocation.length == 1) {
  //       if (homeLocation[0].locationTypeId != 5 && branches.length == 0) {
  //         this.hasBranch=false;
  //         this.selectorDisabledLocation = true;
  //         this.selectedLocationName = "No Branches Available";
  //       }
  //       if (homeLocation[0].items.length == 1 && branches.length == 1) {
  //         this.selectorDisabledLocation = true;
  //       }
  //       if (homeLocation[0].items.length == 0 && branches.length == 1) {
  //         this.selectorDisabledLocation = true;
  //       }
  //     }
  //     else if (homeLocation.length == 0 && branches.length == 0) {
  //       this.hasBranch=false;
  //       this.selectorDisabledLocation = true;
  //       this.selectedLocationName = "No Branches Available";
  //     }
  //   }
  // }

  // private doLocationSelectorOperations() {

  //   this.checkLocationIsHigherLevel();
  //   this.getChildLocations();
  //   this.subscribeToAppointmentRequests();
  //   this.subscribeToCheckInRequests();
  //   this.loadLobbyEntryWaitCounts();
  // }

  public updateLocationState(dataItem:LocationSelectorInfo){
    // this.store.dispatch(CoreActions.updateLocationSelectorInfo({payload: {locationSelectorInfo:dataItem}}));
    // this.store.dispatch(CoreActions.updateACLocationSelectorInfo({ payload: { acLocationCode: dataItem?.locationCode } }));
    // this.doHomeLocationOperation();
    // this.doLocationSelectorOperations();
    // this.store.dispatch(DashboardActions.loadSubLocations({ signInLocationId: this.locationId, selecteLocationIds:this.locationIds}));
    console.log(dataItem);
  }

}
