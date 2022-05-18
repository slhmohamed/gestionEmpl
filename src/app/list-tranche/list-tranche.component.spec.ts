import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrancheComponent } from './list-tranche.component';

describe('ListTrancheComponent', () => {
  let component: ListTrancheComponent;
  let fixture: ComponentFixture<ListTrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrancheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
