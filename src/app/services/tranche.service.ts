import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tranche } from '../model/tranche';

@Injectable({
  providedIn: 'root'
})
export class TrancheService {

  private baseUrl="http://localhost:9092/api/tranches";

  constructor( private http:HttpClient) { }
  getTranchesList(): Observable <Tranche[]>{
    return this.http.get<Tranche[]>(`${this.baseUrl}`);

  }
  getTranchesById( idTranche ?:string): Observable<Tranche>{
    return this.http.get<Tranche>(`${this.baseUrl}/${idTranche}`);
  }
  

  }

