export class LocationMultiSelectorModel {
    locationName: string;
    locationId: number;
    hasChild: boolean;
    items?: LocationMultiSelectorModel[];
    locationTypeId: number;
    isSelected:boolean;
    isSelectable:boolean;
}