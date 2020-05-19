import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

const URL_API = environment.API.EndPoint.Northwind; 

@Injectable({
  providedIn: 'root'
})
export class CuboNorthwindService {

  constructor(private http: HttpClient) { }

  Top5Dimensions(dimension: string, anio: string, mes: string, order: string) {

    return this.http.get(`${URL_API}Top5DimensionsPie/${dimension}/${anio}/${mes}/${order}`);
  
  }
}
