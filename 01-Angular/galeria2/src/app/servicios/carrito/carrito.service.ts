import { Injectable } from '@angular/core';
import { ItemCarritoCompras } from '../../interfaces/item-carrito-conoras';

@Injectable()
export class CarritoService {
    carritoCompras = [];

    agregarCarritoDeCompras(itemCarrito:ItemCarritoCompras): ItemCarritoCompras[]{
        const identificador= itemCarrito.valor;
        const respuestafind = [1,2,3,4].find((valor:number):boolean=>{ // undefind
           return valor == 3
        });
        return [];
    }

}
/*
function busqueda(valor, indice, arreglo){
    console.log('valor: ',valor);
   if(valor == 1){}
   console.log('Te encontre 1');
}*/