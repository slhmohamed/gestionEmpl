import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Temoin } from '../model/temoin';
import { TemoinService } from '../services/temoin.service';



@Component({
  selector: 'app-create-temoin',
  templateUrl: './create-temoin.component.html',
  styleUrls: ['./create-temoin.component.css']
})

export class CreateTemoinComponent implements OnInit {
 temoinForm!: FormGroup;
 
  //Formtemoin:Temoin=new Temoin();
  errorMessage = '';
  submitted = false;
  temoin!: Temoin;
  constructor( public  temoinService:TemoinService,private router:Router
    ,private formBuilder: FormBuilder) { }
    
   // public translate: TranslateService)
  
    
    

    
   ngOnInit(): void {
    this.temoinForm = this.formBuilder.group({
     cin: ['', Validators.required],
     nom:['',Validators.required],
      prenom: ['', Validators.required],
      
      age: ['', Validators.required],
     matricule: ['', [Validators.required, Validators.minLength(6)]],
    
    });
  }
  get f() { return this.temoinForm.controls; }
   

  saveTemoin(){
    this.temoinService.createTemoin(this.temoin).subscribe(data =>{
      console.log(data);
      this.goToTemoinsList();
    },
    error =>console.log(error)
    );
  }
  goToTemoinsList(){
    this.router.navigate(['/temoins']);

  }
  onSubmit(){
   // this.submitted = true;
 
         // stop here if form is invalid
      //   if (this.temoinForm.invalid) {
          //   return;
        // }
 
         // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.temoinForm.value, null, 4));
    console.log(this.temoin);
    this.saveTemoin();
  }
  onReset() {
    this.submitted = false;
    this.temoinForm.reset();
}


 

}

