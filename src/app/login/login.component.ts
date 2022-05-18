import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {Router} from "@angular/router";
import { Employee } from '../model/employee';
import { AuthService } from '../services/auth-service.service';
import { TokenStorageService } from '../services/auth/token-storage.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  submitted=false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  form!:FormGroup;
  employee: Employee = new Employee();

  constructor(private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private route: Router,
    private formBuilder: FormBuilder) { }


 
  ngOnInit() {
    this.form = this.formBuilder.group({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    });
  }
  onSubmit(): void {
    console.log(this.form.value)
    this.employee.username = this.form.value.username;
    this.employee.password = this.form.value.password;
    this.authService.login(this.employee).subscribe(
      data => {
        this.tokenStorage.saveUser(data);
        this.tokenStorage.saveToken(data.jwt);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.employee = data.employee;
       if(this.employee.role?.roleName === 'RH'){
          this.route.navigate(['/employees']);
        }else{
          this.route.navigate(['/employees']);
        }    
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }


 

}
