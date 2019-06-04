export interface Sistemas_Operativo{
    idSO:number;
    nombre:string;
    version:number;
    fechaLanzamiento:Date;
    pesoGigas?:number;
    instalado:boolean;
}