import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    constructor(private WeatherService: WeatherService) {
    }

    ngOnInit() {
    }

    onRegionChange(city) {
        this.WeatherService.fetchCity(city);
    }


}
