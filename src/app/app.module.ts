import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { CompAgmMapComponent } from './comp-agm-map/comp-agm-map.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDy62LdsRIBCNAIC4nCVJGckSSSiHDSmG8'
    })
  ],
  providers: [],
  declarations: [ AppComponent, CompAgmMapComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}