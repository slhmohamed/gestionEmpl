import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { Region } from '../model/region';
import { AppRole } from '../model/role';
import { Service } from '../model/service';
import { AuthService } from '../services/auth-service.service';
import { EmployeeService } from '../services/employee.service';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {
 employeeForm!: FormGroup;
 
  employee=new Employee();
  roles: AppRole[] = [];
 regions:Region[]=[];
 services:Service[]=[];
  errorMessage = '';
  submitted = false;
  constructor( public  employeService:EmployeeService,private router:Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }
    
 
  
    
    

    
   ngOnInit(): void {
     this.getAllroles();
     this.getAllregions();
     this.getAllservices();
   

    this.employeeForm = this.formBuilder.group({
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
      region:['',Validators.required],
      service:['',Validators.required],
    });
  }
  get f() { return this.employeeForm.controls; }
   

  saveEmployee(){
    this.employeService.createEmployee(this.employee).subscribe(data =>{
     console.log(data);
      this.goToEmployeeList()
    },
    error =>console.log(error)
    );
   this.employeService.success('employees enregistere avec succeés');
   this.router.navigateByUrl('/employees');
    }

    goToEmployeeList() {
      this.router.navigate(['/employees']);
  }

  

  onSubmit(){
    console.log(this.employeeForm.value);
    this.employee.nom = this.employeeForm.value.nom;
    this.employee.prenom = this.employeeForm.value.prenom;
    this.employee.username = this.employeeForm.value.username;
    this.employee.email = this.employeeForm.value.email;
    this.employee.matricule = this.employeeForm.value.matricule;
    this.employee.age = this.employeeForm.value.age;
    this.employee.daterecrutement = this.employeeForm.value.daterecrutement;
    this.employee.password = this.employeeForm.value.password;
    this.employee.etatcivil = this.employeeForm.value.etatcivil;
   const roleId = Number(this.employeeForm.value.role);
   const codeRegion=Number(this.employeeForm.value.region);
   const id=Number(this.employeeForm.value.service);
   this.submitted = true;
  console.log(this.employee)
   this.authService.register(this.employee, roleId).subscribe(data =>{
    console.log(data);
     this.goToEmployeeList()
   },
   error =>console.log(error)
   );
  }
  onReset() {
    this.submitted = false;
    this.employeeForm.reset();
}

getAllroles(){
  this.employeService.getAllroles().subscribe(data =>{
    this.roles = data;
    console.log(this.roles)
  })
}
getAllregions(){
  this.employeService.getAllregions().subscribe(data =>{
    this.regions = data;
    console.log(this.regions)
  })
}
getAllservices(){
  this.employeService.getAllservices().subscribe(data =>{
    this.services = data;
    console.log(this.services)
  })
}

 

}

