import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDossierMedicalComponent } from './update-dossier-medical.component';

describe('UpdateDossierMedicalComponent', () => {
  let component: UpdateDossierMedicalComponent;
  let fixture: ComponentFixture<UpdateDossierMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDossierMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDossierMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
