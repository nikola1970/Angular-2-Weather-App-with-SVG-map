import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherService {


    citySubject = new Subject();

    private URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private API_KEY = '&APPID=397843cb2d3cbe8f748d85fd572da092&units=metric';

    constructor(private http: Http) {
        this.fetchCity("Belgrade");
    }


    fetchCity(city) {
        return this.http.get(`${this.URL}${city}${this.API_KEY}`)
            .map(res => res.json())
            .subscribe(
                city => {
                    this.citySubject.next(city);
                }
            )
    }


}
