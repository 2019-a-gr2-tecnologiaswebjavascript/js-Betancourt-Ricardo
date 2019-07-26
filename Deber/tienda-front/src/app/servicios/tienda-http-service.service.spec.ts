import { TestBed } from '@angular/core/testing';

import { TiendaHttpServiceService } from './tienda-http-service.service';

describe('TiendaHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiendaHttpServiceService = TestBed.get(TiendaHttpServiceService);
    expect(service).toBeTruthy();
  });
});
