import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LocationSingleSelectorModule } from './location-single-selector/location-single-selector-module';
import { LocationMultiSelectorModule } from './location-multi-selector/location-multi-selector-module';
import { LocationSelectorComponent } from './location-selector/location-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationSelectorComponent
  ],
  imports: [
    BrowserModule,
    LocationSingleSelectorModule,
    BrowserAnimationsModule,
    LocationMultiSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
