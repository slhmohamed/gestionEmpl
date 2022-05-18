import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierMedicauxListComponent } from './dossier-medicaux-list.component';

describe('DossierMedicauxListComponent', () => {
  let component: DossierMedicauxListComponent;
  let fixture: ComponentFixture<DossierMedicauxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierMedicauxListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierMedicauxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
