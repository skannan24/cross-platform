import { TestBed } from '@angular/core/testing';

import { CrossoverService } from './crossover.service';

describe('CrossoverService', () => {
  let service: CrossoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrossoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
