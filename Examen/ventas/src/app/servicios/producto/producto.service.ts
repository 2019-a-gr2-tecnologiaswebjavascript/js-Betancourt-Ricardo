import { Injectable } from '@angular/core';
import { aplicacion } from 'src/app/interfaces/aplicacion';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos:aplicacion[]=[];
  productosid:aplicacion[]=[];
  productosvacio:aplicacion[]=[];
  idA:number=0;
  constructor() { 
    console.log(this.productos);
  }

  getProductos(){
    return this.productos
  }

  getProducto(idSO:number){
   
    this.productosid=[];
    console.log(idSO + " Estoy funcion" + this.productosid);
    this.productos.forEach(element => {
      
      console.log("elemento id : "+element.idSO);
      if(idSO==element.idSO){
        this.productosid.push(element);
      }      
    });
    return this.productosid;
  }

  getId(){
    return this.idA;
  }
  setProductos(producto:aplicacion){
    this.productos.push(producto);
    this.idA++;
    console.log(this.productos);
  }

  eliminar(index:number){
    this.productos.forEach(element => {     
      if(index=== element.idA){         
         this.productos.splice(this.productos.indexOf(element),1);         
      }
   });

  }

   

}
