import { Injectable } from '@angular/core';
import { HttpSailsPrincipalService } from './http-sails-principal.service';
import { Tienda } from '../dto/tienda'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TiendaHttpServiceService extends HttpSailsPrincipalService<Tienda>{

  constructor(private readonly _httpClient : HttpClient) {
    super(_httpClient, environment.url, '/Tienda')
   }
   
}
