import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Accident } from '../model/accident';
import { AccidentService } from '../services/accident.service';

@Component({
  selector: 'app-create-accident',
  templateUrl: './create-accident.component.html',
  styleUrls: ['./create-accident.component.css']
})
export class CreateAccidentComponent implements OnInit {
   
  accidentForm!:FormGroup;
  accident!:Accident;
submitted?:false
  constructor( private  accidentService:AccidentService,private router:Router) { }

  ngOnInit(): void {
  }

  saveAccident(){
    this.accidentService.createAccident(this.accident).subscribe(data =>{
      console.log(data);
      this.goToAccidentList();
    },
    error =>console.log(error)
    );
  }
  goToAccidentList(){
    this.router.navigate(['/accidents']);

  }
  onSubmit(){
    console.log(this.accident);
    this.saveAccident();
  }
  get f() { return this.accidentForm.controls; }
  onReset() {
    this.submitted = false;
    this.accidentForm.reset();
}
 

}
