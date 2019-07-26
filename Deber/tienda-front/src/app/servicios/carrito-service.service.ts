import { Injectable } from '@angular/core';
import { ItemCarrito } from '../dto/item-carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  carritoCompras : ItemCarrito[] = []

  constructor() { 

  }

  agregarAlCarrito(nuevoProducto : ItemCarrito) : ItemCarrito[] {
    const nombreItem = nuevoProducto.nombreProducto
    const tienda = nuevoProducto.nombreTienda
    var indice = -1
    const existeElItem = this.carritoCompras.some((item, indiceActual) => {
      if(item.nombreProducto == nombreItem && item.nombreTienda == tienda){
        indice = indiceActual
        return true
      }else{
        return false
      }
    })
    if(existeElItem){
      this.aumentarContador(indice)
    }else{
      this.nuevoItem(nuevoProducto)
    }
    return this.carritoCompras
  }

  aumentarContador(indice){
    this.carritoCompras[indice].cantidad ++
  }

  nuevoItem(nuevoProducto : ItemCarrito){
    nuevoProducto.cantidad = 1
    this.carritoCompras.splice(0, 0, nuevoProducto)
  }

}
