import { TestBed } from '@angular/core/testing';

import { ProductoTiendaHttpServiceService } from './producto-tienda-http-service.service';

describe('ProductoTiendaHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoTiendaHttpServiceService = TestBed.get(ProductoTiendaHttpServiceService);
    expect(service).toBeTruthy();
  });
});
