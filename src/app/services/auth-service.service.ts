import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee';

const AUTH_API = environment.baseURL;

let headers = { 'content-type': 'application/json' };
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    constructor(private http: HttpClient) { }

    login(credentials: any): Observable<any> {
        return this.http.post(AUTH_API + 'api/login',credentials);
    }

    register(employee: Employee, roleId: number): Observable<any> {
        const HTTP_OPTIONS = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Accept': '*/*',
              'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS'
            })
          };
        return this.http.post(
            AUTH_API + 'api/register/'+roleId, employee, HTTP_OPTIONS);
    }

    registerCandidat(user: any): Observable<any> {
        return this.http.post(
            AUTH_API + 'signupcandidat',
            {
                cin: user.cin,
                email: user.email,
                login: user.login,
                nom: user.nom,
                prenom: user.prenom,
                numTel: user.numTel,
                specialite: user.specialite,
                password: user.password,

                role: user.role,

            }, httpOptions);
    }
    registerFormateur(user: any): Observable<any> {
        return this.http.post(
            AUTH_API + 'signupformateur',
            {
                cin: user.cin,
                email: user.email,
                login: user.login,
                nom: user.nom,
                prenom: user.prenom,
                numTel: user.numTel,
                fonction: user.fonction,
                password: user.password,

                role: user.role,

            }, httpOptions);
    }

}



