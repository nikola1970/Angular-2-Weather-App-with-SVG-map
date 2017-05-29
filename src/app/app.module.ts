import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DetailsComponent } from './details/details.component';
import { ChartComponent } from './chart/chart.component';

import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DetailsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
