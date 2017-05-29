import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    defaultCity;

    cityTemperature;
    cityPressure;
    cityHumidity;
    weatherDescription :string = "";
    windSpeed;


    constructor(private WeatherService: WeatherService) {
    }

    ngOnInit() {
        this.WeatherService.citySubject.subscribe(
            city => {
                this.defaultCity = city;
                this.cityTemperature = this.defaultCity.main.temp + " °C";
                this.cityHumidity = this.defaultCity.main.humidity + "%";
                this.cityPressure = this.defaultCity.main.pressure + " mb";
                this.weatherDescription = this.defaultCity.weather[0].description;
                this.windSpeed = this.defaultCity.wind.speed + " m/s";
            }
        )
    }



}
