import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccidentComponent } from "./accident/accident.component";
import { HomeComponent } from "./components/home/home.component";
import { CreateAccidentComponent } from "./create-accident/create-accident.component";
import { CreateDetailComponent } from "./create-detail/create-detail.component";
import { CreateDossierMedicalComponent } from "./create-dossier-medical/create-dossier-medical.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { CreateTemoinComponent } from "./create-temoin/create-temoin.component";
import { DetailAccidentComponent } from "./detail-accident/detail-accident.component";
import { DetailTrancheComponent } from "./detail-tranche/detail-tranche.component";
import { DetailComponent } from "./detail/detail.component";
import { DossierMedicalDetailsComponent } from "./dossier-medical-details/dossier-medical-details.component";
import { DossierMedicauxListComponent } from "./dossier-medicaux-list/dossier-medicaux-list.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { ListTrancheComponent } from "./list-tranche/list-tranche.component";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";

import { RegionListComponent } from "./region-list/region-list.component";
import { RegisterComponent } from "./register/register.component";

import { ServiceListComponent } from "./service-list/service-list.component";
import { SuccessSignupComponent } from "./success-signup/success-signup.component";
import { TemoinComponent } from "./temoin/temoin.component";
import { TypeAccidentListComponent } from "./type-accident-list/type-accident-list.component";
import { UpdateAccidentComponent } from "./update-accident/update-accident.component";
import { UpdateDossierMedicalComponent } from "./update-dossier-medical/update-dossier-medical.component";


import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { AuthGuard } from "./_helpers/auth.guard";



const routes :Routes=[
    { path: '',  component:HomeComponent},
    { path:'employees',component:EmployeeListComponent},
    { path:'accidents',component:AccidentComponent},
    
    {path : 'create-employee', component :CreateEmployeeComponent},
    {path: 'update-employee/:id', component : UpdateEmployeeComponent},
    {path: 'employees-details/:id' , component:EmployeeDetailsComponent},
    {path: 'create-accident', component:CreateAccidentComponent},
    {path :'update-accident/:id', component :UpdateAccidentComponent},
    {path :'accident-details/:id', component:DetailAccidentComponent},
     {path :'services', component :ServiceListComponent},
     {path :'regions', component:RegionListComponent},
     {path :'dossierMedicaux' ,component :DossierMedicauxListComponent},
     {path :'create-dossierMedical' ,component:CreateDossierMedicalComponent},
     {path :'update-dossierMedical/:id' , component :UpdateDossierMedicalComponent},
    {path :'dosierMedical-details/:id' ,component: DossierMedicalDetailsComponent},
    {path :'tranches' ,component:ListTrancheComponent},
    {path :'register',component:RegisterComponent},
    {path :'login',component:LoginComponent},
    {path :'menu', component:MenuComponent},
    {path :'temoin',component:TemoinComponent},
    {path :'craete-temoin',component:CreateTemoinComponent},
    {path:'create-detail',component:CreateDetailComponent},
    {path :'details',component:DetailComponent},
    {path :'success-signup',component:SuccessSignupComponent},
    {path :'types' , component:TypeAccidentListComponent},

   
  
    // otherwise redirect to profile
    { path: '**', redirectTo: '/login' }

  
	
];

@NgModule({
imports:[ RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{}