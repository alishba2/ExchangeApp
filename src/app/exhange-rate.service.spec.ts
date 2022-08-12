import { TestBed } from '@angular/core/testing';

import { ExhangeRateService } from './exhange-rate.service';

describe('ExhangeRateService', () => {
  let service: ExhangeRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExhangeRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
