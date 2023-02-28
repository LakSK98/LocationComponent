export class LocationSelectorItem {
    locationName: string;
    locationId: number;
    isSelectable:boolean;
    hasChild: boolean;
    items?: LocationSelectorItem[];
    level:number;
    parentId:number;
    locationTypeId:number;
    utcoffsetInMinutes:number;
    timeZone: string;
    timeZoneId: string;
    timeZoneName:string;
    locationCode:string;
    lastLocationAutoWraupTime:string;
}