import { TestBed } from '@angular/core/testing';

import { PatologiaApoService } from './patologia-apo.service';

describe('PatologiaApoService', () => {
  let service: PatologiaApoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatologiaApoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
