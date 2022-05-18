import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Accident } from '../model/accident';
import { AccidentService } from '../services/accident.service';

@Component({
  selector: 'app-update-accident',
  templateUrl: './update-accident.component.html',
  styleUrls: ['./update-accident.component.css']
})
export class UpdateAccidentComponent implements OnInit {

  id!: string;
  accident!:Accident;
  submitted?:false
  constructor( private accidentService:AccidentService , 
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.accidentService.getAccidentById(this.id).subscribe(data =>{
      this.accident= data;

    },
    error => console.log(error));
  }
  onSubmit(){
    this.accidentService.updateAccident(this.id ,this.accident).subscribe
    (data =>{
      this.goToAccidentList();
    },
    error=> console.log(error));
  }
  goToAccidentList(){
    this.router.navigate(['/accidents']);

  }

}
