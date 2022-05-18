import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccidentComponent } from './accident/accident.component';
import{ HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateAccidentComponent } from './create-accident/create-accident.component';
import { UpdateAccidentComponent } from './update-accident/update-accident.component';
import { DetailAccidentComponent } from './detail-accident/detail-accident.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { RegionListComponent } from './region-list/region-list.component';
import { DossierMedicauxListComponent } from './dossier-medicaux-list/dossier-medicaux-list.component';
import { CreateDossierMedicalComponent } from './create-dossier-medical/create-dossier-medical.component';
import { UpdateDossierMedicalComponent } from './update-dossier-medical/update-dossier-medical.component';
import { DossierMedicalDetailsComponent } from './dossier-medical-details/dossier-medical-details.component';
import { ListTrancheComponent } from './list-tranche/list-tranche.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers/auth.guard';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MenuComponent } from './menu/menu.component';
import { TemoinComponent } from './temoin/temoin.component';
import { CreateTemoinComponent } from './create-temoin/create-temoin.component';
import { DetailComponent } from './detail/detail.component';
import { CreateDetailComponent } from './create-detail/create-detail.component';
import { SuccessSignupComponent } from './success-signup/success-signup.component';
import { TypeAccidentListComponent } from './type-accident-list/type-accident-list.component';
import { DetailTrancheComponent } from './detail-tranche/detail-tranche.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';





@NgModule({
  declarations: [
    AppComponent,
    AccidentComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    CreateAccidentComponent,
    UpdateAccidentComponent,
    DetailAccidentComponent,
    ServiceListComponent,
    RegionListComponent,
    DossierMedicauxListComponent,
    CreateDossierMedicalComponent,
    UpdateDossierMedicalComponent,
    DossierMedicalDetailsComponent,
    ListTrancheComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    TemoinComponent,
    CreateTemoinComponent,
    DetailComponent,
    CreateDetailComponent,
    SuccessSignupComponent,
    TypeAccidentListComponent,
    DetailTrancheComponent,
    NavbarComponent,
    HomeComponent,
    ServiceComponent,
    
  
   
   
   
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    authInterceptorProviders, 
    AuthGuard
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
