import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAccidentListComponent } from './type-accident-list.component';

describe('TypeAccidentListComponent', () => {
  let component: TypeAccidentListComponent;
  let fixture: ComponentFixture<TypeAccidentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeAccidentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAccidentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
