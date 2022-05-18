import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';

import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
  
})
export class EmployeeListComponent implements OnInit {
  employees:any = [];
 
  constructor( private employeeService : EmployeeService ,
     private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees=data;
    });
  }
  updateEmployee( id ?:string){
    this.router.navigate(['update-employee',id]);

  }
  deleteEmployee(id ?:string){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
  }
  employeeDetails(id?:string){
    this.router.navigate(['employees-details',id]);

  }

}
