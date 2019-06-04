import { NumberFormatStyle } from '@angular/common';
import { aplicacion } from './aplicacion';

export interface compra{
    idC:number;
    nombreCajero:string;
    nombre:string;
    cedula:string;
    direcciom:string;
    telefono:string;
    correo?:string;
    aplicaciones:aplicacion[];
    total:number;
}