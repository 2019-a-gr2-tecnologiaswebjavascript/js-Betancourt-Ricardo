import { Injectable } from '@angular/core';
import { HttpSailsPrincipalService } from './http-sails-principal.service';
import { Producto } from '../dto/producto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoHttpService extends HttpSailsPrincipalService<Producto>{
  constructor(private readonly _htttpClient : HttpClient){
      super(_htttpClient, environment.url,'/Producto')
  }
}