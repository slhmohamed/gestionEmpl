import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTrancheComponent } from './detail-tranche.component';

describe('DetailTrancheComponent', () => {
  let component: DetailTrancheComponent;
  let fixture: ComponentFixture<DetailTrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTrancheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
