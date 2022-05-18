import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accident } from '../model/accident';
import { AccidentService } from '../services/accident.service';

@Component({
  selector: 'app-detail-accident',
  templateUrl: './detail-accident.component.html',
  styleUrls: ['./detail-accident.component.css']
})
export class DetailAccidentComponent implements OnInit {

  id?:string;
  accident: any;
 
  constructor( private route:ActivatedRoute , 
    private accidentService:AccidentService) { }

  ngOnInit(): void {
this.id=this.route.snapshot.params['id'];
this.accident
this.accidentService.getAccidentById(this.id).subscribe(data =>{
  this.accident=data;
},
);
  }

}
