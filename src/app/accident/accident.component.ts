import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accident } from '../model/accident';
import { AccidentService } from '../services/accident.service';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})
export class AccidentComponent implements OnInit {
  accidents ?: Accident[];

  constructor( private accidentService : AccidentService , 
    private router:Router) { }

  ngOnInit(): void {
    this.getAccidents();
  }
  private getAccidents(){
    this.accidentService.getAccidents().subscribe(data=>{
      this.accidents=data;
    });
  }
  updateAccident( id ?:string){
    this.router.navigate(['update-accident',id]);

  }
 
  detailsAccident(id?:string){
    this.router.navigate(['accident-details',id]);

  }

}
