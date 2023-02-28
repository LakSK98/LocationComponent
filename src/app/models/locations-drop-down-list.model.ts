export class LocationDropDownModel {
    locationName: string;
    locationId: number;
    hasChild: boolean;
    items?: LocationDropDownModel[];
    locationTypeId: number;
}