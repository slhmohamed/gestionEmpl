import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../model/service';
import { Temoin } from '../model/temoin';

@Injectable({
  providedIn: 'root'
})
export class TemoinService {
 

  private baseUrl="http://localhost:9092/api/temoins";
  invalid: any;

  constructor( private http:HttpClient) { }

  createTemoin(temoin: Temoin): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, temoin);

  }
  
  getTemoins(): Observable <Temoin[]>{
    return this.http.get<Temoin[]>(`${this.baseUrl}`);

  }
  getTemoinById( idTemoin ?:number): Observable<Temoin>{
    return this.http.get<Temoin>(`${this.baseUrl}/${idTemoin}`);
  }
  getTemoinssList(): Observable <Temoin[]>{
    return this.http.get<Temoin[]>(`${this.baseUrl}`);

  }
}
