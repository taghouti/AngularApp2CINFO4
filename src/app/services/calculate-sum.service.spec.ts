import {TestBed} from '@angular/core/testing';

import {CalculateSumService} from './calculate-sum.service';

describe('CalculateSumService', () => {
  let service: CalculateSumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateSumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
