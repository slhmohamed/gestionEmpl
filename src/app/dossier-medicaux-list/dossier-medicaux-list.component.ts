import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DossierMedical } from '../model/dossier-medical';
import { DossierMedicalService } from '../services/dossier-medical.service';

@Component({
  selector: 'app-dossier-medicaux-list',
  templateUrl: './dossier-medicaux-list.component.html',
  styleUrls: ['./dossier-medicaux-list.component.css']
})
export class DossierMedicauxListComponent implements OnInit {

  dossiers ?: DossierMedical[];
  constructor( private dossierService : DossierMedicalService , 
    private router:Router) { }

  ngOnInit(): void {
    this.getDossierMedical();
  }
  private getDossierMedical(){
    this.dossierService.getDossierMedicals().subscribe(data=>{
      this.dossiers=data;
    });
  }
  updateDossierMedical( id ?:string){
    this.router.navigate(['update-dossierMedical',id]);

  }
 
  detailsDossierMedical(id?:string){
    this.router.navigate(['dossierMedical-details',id]);

  }

}
