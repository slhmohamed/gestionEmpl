import { TestBed } from '@angular/core/testing';

import { TemoinService } from './temoin.service';

describe('TemoinService', () => {
  let service: TemoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
