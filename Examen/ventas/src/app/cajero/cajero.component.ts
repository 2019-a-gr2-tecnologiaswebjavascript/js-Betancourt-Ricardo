import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth/auth.service';
import { aplicacion } from '../interfaces/aplicacion';
import { ProductoService } from '../servicios/producto/producto.service';
import { GrupoService } from '../servicios/grupo/grupo.service';
import { NgForm } from '@angular/forms';
import { compra } from '../interfaces/compra';
import { CarritoService } from '../servicios/carrito/carrito.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.component.html',
  styleUrls: ['./cajero.component.css']
})
export class CajeroComponent implements OnInit {
  nombreCajero:string;
  total:number;
  productosComprados:aplicacion[]=[];
  productos:aplicacion[];
  nombreSO:string;
  compra:compra;
  idC:number;
  constructor(private readonly _authService:AuthService, private productoService:ProductoService,private grupoService: GrupoService, private carritoService: CarritoService) {
    this.nombreCajero = _authService.nombreCajero;
    console.log(this.nombreCajero);
    this.productos=productoService.getProductos();
    console.log(this.productos);
    this.idC=carritoService.getId();
   }

  ngOnInit() {
  }

  agregarProducto(idSO:number){
    console.log(idSO);
    this.grupoService.buscariD(idSO);
    this.nombreSO=this.grupoService.nombreSO;
  }

  procomprados(producto:aplicacion){
    this.productosComprados.push(producto);
    this.calcularTotal();
  }

  calcularTotal(){
    this.total=0;
    this.productosComprados.forEach(element => {
      this.total+=element.costo;
    });
    console.log(this.total)
  }

  guardar(formulario:NgForm){
    this.compra={
    idC:this.idC,
    nombreCajero:this.nombreCajero,
    nombre:formulario.value.nombreC,
    cedula:formulario.value.cedulaC,
    direcciom:formulario.value.direccionC,
    telefono:formulario.value.telefonoC,
    correo:formulario.value.correoC,
    aplicaciones:this.productosComprados,
    total:this.total,
    }
    
    this.carritoService.setCompra(this.compra);
  }

  limpiarArg(){
    this.productosComprados=[];
    this.total=0;
  }

  eliminar(index:number){
 this.productosComprados.splice(index,1);  
   this.calcularTotal();
  }


}
