import { TestBed } from '@angular/core/testing';

import { ProductoHttpServiceService } from './producto-http-service.service';

describe('ProductoHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoHttpServiceService = TestBed.get(ProductoHttpServiceService);
    expect(service).toBeTruthy();
  });
});
