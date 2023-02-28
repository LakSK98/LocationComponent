import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { LocationSingleSelectorComponent } from './location-single-selector.component';
import { LocationSingleSelectorTreeViewComponent } from './location-single-selector-tree-view/location-single-selector-tree-view.component';

@NgModule({
  declarations: [
    LocationSingleSelectorTreeViewComponent,
    LocationSingleSelectorComponent,
  ],
  imports: [    
    CommonModule,
    TreeViewModule
  ],
  exports:[
    LocationSingleSelectorComponent
  ],
  entryComponents: [LocationSingleSelectorComponent],
})
export class LocationSingleSelectorModule { }
