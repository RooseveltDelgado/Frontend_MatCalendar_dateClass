import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  url_servicio: any;
  constructor( public http: HttpClient,) {
    this.url_servicio = 'http://serviciosfinancieros.cofide.com.pe/WS-CDE/api/v1/supervisor/plan';
   }
   public getPlanificacionCalendario(): Observable<any>{
    return this.http.get(this.url_servicio + '/listarplancalendario');
  }

  public getCalendario(): Observable<any>{
    return this.http.get('http://localhost:5000/api/WeatherForecast/fechas');
  }
  public getNewCalendario(): Observable<any>{
    return this.http.get('http://localhost:5000/api/WeatherForecast/newfecha');
  }
}
