import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee';
import { Region } from '../model/region';
import { AppRole } from '../model/role';
import { Service } from '../model/service';

const AUTH_API = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
    getAllregions():Observable<Region[]>{
      return this.http.get<Region[]>(AUTH_API+'api/regions');
    }
    getAllservices():Observable<Service[]>{
      return this.http.get<Service[]>(AUTH_API+'api/services');
    }
  success(arg0: string) {
    throw new Error('Method not implemented.');
  }
 
 private baseUrl="http://localhost:9092/api/employees";
  
  constructor( private http:HttpClient) { }
  getEmployeeList(): Observable <Employee[]>{
    return this.http.get<Employee[]>
    (`${this.baseUrl}`);

  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, employee);

  }
  getEmployeeById( id ?:string): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);

  }

  updateEmployee(id:string,employee:Employee):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,employee);
  }
  
  deleteEmployee(id?:String):Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllroles():Observable<AppRole[]>{
    return this.http.get<AppRole[]>(AUTH_API+'api/role/all');
  }
}
