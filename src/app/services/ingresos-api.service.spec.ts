import { TestBed } from '@angular/core/testing';

import { IngresosApiService } from './ingresos-api.service';

describe('IngresosApiService', () => {
  let service: IngresosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
