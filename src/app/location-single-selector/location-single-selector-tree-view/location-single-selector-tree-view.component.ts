import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocationDropDownModel } from '../../models/locations-drop-down-list.model';
import { LocationSelectorInfo } from '../../models/locationSelectorModel';

@Component({
    selector: 'location-single-selector-tree-view',
    templateUrl: './location-single-selector-tree-view.component.html',
    styleUrls: ['./location-single-selector-tree-view.component.scss']
})
export class LocationSingleSelectorTreeViewComponent implements OnInit {

    // get root locations ids as input
    @Input() expandedKeys: any[];

    // get checked components Tree view unique id0
    @Input() selectedLocationId: number;

    // Tree view shown locations
    @Input() locations: LocationDropDownModel[];

    @Output() closeEvent: EventEmitter<LocationSelectorInfo> = new EventEmitter<LocationSelectorInfo>();

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

    constructor() { }

    public ngOnInit(): void {
    }

    ngAfterContentInit() {
        this.addExpandListItem(this.locations);
    }

    showClick(dataItem : any) {
        this.locationSelector = {
            id: dataItem?.locationId,
            locationName: dataItem?.locationName,
            locationCode: dataItem?.locationCode,
            locationTypeId: dataItem?.locationTypeId,
            utcoffsetInMinutes: dataItem?.utcoffsetInMinutes,
            timezoneId: dataItem?.timeZoneId,
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
