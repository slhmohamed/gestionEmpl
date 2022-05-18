import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../model/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
 

  private baseUrl="http://localhost:9092/api/regions";

  constructor( private http:HttpClient) { }
  getRegionsList(): Observable <Region[]>{
    return this.http.get<Region[]>(`${this.baseUrl}`);

  }
  getServiceById( codRegion ?:string): Observable<Region>{
    return this.http.get<Region>(`${this.baseUrl}/${codRegion}`);
  }
  getServicesList(): Observable <Region[]>{
    return this.http.get<Region[]>(`${this.baseUrl}`);

  }
}
