import { NumberFormatStyle } from '@angular/common';

export interface aplicacion{
    idA:number;
    pesoGigas:number;
    version:number;
    nombre:string;
    urlDescarga?:string;
    fechaLanzamiento:Date;
    costo:number;
    idSO:number;

}