import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accident } from '../model/accident';

@Injectable({
  providedIn: 'root'
})
export class AccidentService {
 
 

 
  private baseUrl="http://localhost:9092/api/accidents";

  constructor( private http:HttpClient) { }
  getAccidents(): Observable <Accident[]>{
    return this.http.get<Accident[]>(`${this.baseUrl}`);

  }
  createAccident(accident: Accident): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, accident);

  }
  updateAccident(id:string,accident:Accident):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,accident);
  }
  getAccidentById( id ?:string): Observable<Accident>{
    return this.http.get<Accident>(`${this.baseUrl}/${id}`);
  }
  




}
