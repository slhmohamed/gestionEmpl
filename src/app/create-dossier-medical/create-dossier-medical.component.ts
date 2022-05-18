import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DossierMedical } from '../model/dossier-medical';
import { DossierMedicalService } from '../services/dossier-medical.service';

@Component({
  selector: 'app-create-dossier-medical',
  templateUrl: './create-dossier-medical.component.html',
  styleUrls: ['./create-dossier-medical.component.css']
})
export class CreateDossierMedicalComponent implements OnInit {

  dossier!:DossierMedical;
  submitted?:false
    constructor( private  dossierMedicalService:DossierMedicalService,private router:Router) { }
  
    ngOnInit(): void {
    }
  
    saveDossierMedicals(){
      this.dossierMedicalService.createDossierMedical(this.dossier).subscribe(data =>{
        console.log(data);
        this.goToDossierMedicalList();
      },
      error =>console.log(error)
      );
    }
    goToDossierMedicalList(){
      this.router.navigate(['/dossierMedicaux']);
  
    }
    onSubmit(){
      console.log(this.dossier);
      this.saveDossierMedicals();
    }
 

}
