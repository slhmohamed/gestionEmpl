import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { AppRole } from '../model/role';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!: string;
  //roles: AppRole[] = [];
  employee:Employee=new Employee();
  submitted?:false
  employeeForm!: FormGroup;
  constructor( private employeeService:EmployeeService , private route: ActivatedRoute,
    private router:Router,
    private formBuilder: FormBuilder) { }



    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];

      this.employeeService.getEmployeeById(this.id).subscribe(data =>{
        this.employee= data;
  
      },
      error => console.log(error));
    
    
    
    
 
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
     });
   }


   
  get f() { return this.employeeForm.controls; }
  onSubmit(){
    this.employeeService.updateEmployee(this.id ,this.employee).subscribe
    (data =>{
      this.goToEmployeeList();
    },
    error=> console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);

  }
 
  onReset() {
    this.submitted = false;
    this.employeeForm.reset();
}
/*getAllroles(){
  this.employeeService.getAllroles().subscribe(data =>{
    this.roles = data;
    console.log(this.roles)
  })
}*/


}
