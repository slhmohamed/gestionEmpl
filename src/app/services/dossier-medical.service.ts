import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DossierMedical } from '../model/dossier-medical';

@Injectable({
  providedIn: 'root'
})
export class DossierMedicalService {

 

  
  private baseUrl="http://localhost:9092/api/dossiers";

  constructor( private http:HttpClient) { }
  getDossierMedicals(): Observable <DossierMedical[]>{
    return this.http.get<DossierMedical[]>(`${this.baseUrl}`);

  }
  createDossierMedical(dossier: DossierMedical): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, dossier);

  }
  updateDossierMedical(id:string,dossier:DossierMedical):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,dossier);
  }
  getDossierMedicalById( id ?:string): Observable<DossierMedical>{
    return this.http.get<DossierMedical>(`${this.baseUrl}/${id}`);
  }
}
