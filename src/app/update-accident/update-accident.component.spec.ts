import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccidentComponent } from './update-accident.component';

describe('UpdateAccidentComponent', () => {
  let component: UpdateAccidentComponent;
  let fixture: ComponentFixture<UpdateAccidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
