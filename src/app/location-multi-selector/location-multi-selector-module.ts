import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { LocationMultiSelectorComponent } from './location-multi-selector.component';
import { LocationMultiSelectorTreeViewComponent } from './location-multi-selector-tree-view/location-multi-selector-tree-view.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [
    LocationMultiSelectorTreeViewComponent,
    LocationMultiSelectorComponent 
  ],
  imports: [    
    CommonModule,
    TreeViewModule,
    FormsModule,
    ButtonsModule
  ],
  exports:[
    LocationMultiSelectorComponent
  ],
  entryComponents: [LocationMultiSelectorComponent],
})
export class LocationMultiSelectorModule { }
