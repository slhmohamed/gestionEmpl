import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTemoinComponent } from './create-temoin.component';

describe('CreateTemoinComponent', () => {
  let component: CreateTemoinComponent;
  let fixture: ComponentFixture<CreateTemoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTemoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTemoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
