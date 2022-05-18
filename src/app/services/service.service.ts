import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 

  private baseUrl="http://localhost:9092/api/services";

  constructor( private http:HttpClient) { }
  getServices(): Observable <Service[]>{
    return this.http.get<Service[]>(`${this.baseUrl}`);

  }
  getServiceById( id ?:string): Observable<Service>{
    return this.http.get<Service>(`${this.baseUrl}/${id}`);
  }
  getServicesList(): Observable <Service[]>{
    return this.http.get<Service[]>(`${this.baseUrl}`);

  }
}
