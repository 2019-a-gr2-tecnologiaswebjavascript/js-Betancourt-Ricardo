import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ingresoNombreCajero:boolean = false;
  nombreCajero:string;
  constructor() { }

  verificar(nombreCajero:string){
    if(nombreCajero){
      this.ingresoNombreCajero = true;
      this.nombreCajero=nombreCajero;
      return this.ingresoNombreCajero;
    }else{
      return false;
    }

  }
}
