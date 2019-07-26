import { Injectable } from '@angular/core';
import { HttpSailsPrincipalService } from './http-sails-principal.service';
import { ProductoTienda } from '../dto/productoTienda';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoTiendaHttpServiceService extends HttpSailsPrincipalService<ProductoTienda> {

  constructor(private readonly _httpClient : HttpClient) {
    super(_httpClient, environment.url, '/ProductoTienda')
   }
}
