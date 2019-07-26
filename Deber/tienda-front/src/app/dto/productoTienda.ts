import { Tienda } from './tienda';
import { Producto } from './producto';

export interface ProductoTienda {
    createdAt?: number
    updatedAt?: number
    id?: number
    existencias : number
    tienda_FK : number | Tienda | any
    producto_FK : number | Producto | any
}