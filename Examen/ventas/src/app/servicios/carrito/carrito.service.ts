import { Injectable } from '@angular/core';
import { compra } from 'src/app/interfaces/compra';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  compras:compra[]=[];
  idC:number=0;
  constructor() { }
  getCompras(){
    return this.compras;    
  }
  getId(){
    return this.idC;
  }
  setCompra(grupo:compra){
    this.compras.push(grupo);
    this.idC++;
    console.log(this.compras);
  }


}
