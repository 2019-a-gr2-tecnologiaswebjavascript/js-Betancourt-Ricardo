import { TestBed } from '@angular/core/testing';

import { CarritoServiceService } from './carrito-service.service';

describe('CarritoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarritoServiceService = TestBed.get(CarritoServiceService);
    expect(service).toBeTruthy();
  });
});
