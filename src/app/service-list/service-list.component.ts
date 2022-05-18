import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../model/service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services?:Service[];
  constructor( private serviceService : ServiceService ,
     private router:Router) { }

  ngOnInit(): void {
    this.getServices();
  }
 
  private getServices(){
    this.serviceService.getServicesList().subscribe(data=>{
      this.services=data;
    });
  }

}
