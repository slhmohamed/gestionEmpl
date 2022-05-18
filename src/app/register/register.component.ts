import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/employee';
import { AppRole } from '../model/role';
import { AuthService } from '../services/auth-service.service';
import { EmployeeService } from '../services/employee.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  employee: Employee = new Employee();
  roles: AppRole[] = [];
  registerForm!:FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted = false;
  today = new Date();


  constructor(private authService: AuthService, 
    private emplyeeService:EmployeeService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllroles();

    this.registerForm = this.formBuilder.group({
      matricule: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      nom: ['', Validators.required],
      age: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      prenom: ['', Validators.required],
      daterecrutement: ['', Validators.required],
      etatcivil: ['', Validators.required],
      role: ['', Validators.required],
    });
  }
  get f() { return this.registerForm.controls; }

 onSubmit(): void {
   console.log(this.registerForm.value);
   this.employee.nom = this.registerForm.value.nom;
   this.employee.prenom = this.registerForm.value.prenom;
   this.employee.username = this.registerForm.value.username;
   this.employee.email = this.registerForm.value.email;
   this.employee.matricule = this.registerForm.value.matricule;
   this.employee.age = this.registerForm.value.age;
   this.employee.daterecrutement = this.registerForm.value.daterecrutement;
   this.employee.password = this.registerForm.value.password;
   this.employee.etatcivil = this.registerForm.value.etatcivil;
  const roleId = Number(this.registerForm.value.role);
   this.submitted = true;
           
    this.authService.register(this.employee, roleId).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      },)
     
 }
     // convenience getter for easy access to form fields
     //get f() { return this.registerForm.controls; }
  
    //  onSubmit() {
    //      this.submitted = true;
    //      stop here if form is invalid
    //      if (this.registerForm.invalid) {
    //          return;
    //      }
    //      display form values on success
    //      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    //  }
 
     onReset() {
         this.submitted = false;
         this.registerForm.reset();
     }

     getAllroles(){
       this.emplyeeService.getAllroles().subscribe(data =>{
         this.roles = data;
         console.log(this.roles)
       })
     }
  }



 


