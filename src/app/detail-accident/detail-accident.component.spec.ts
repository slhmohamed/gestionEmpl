import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAccidentComponent } from './detail-accident.component';

describe('DetailAccidentComponent', () => {
  let component: DetailAccidentComponent;
  let fixture: ComponentFixture<DetailAccidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAccidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
