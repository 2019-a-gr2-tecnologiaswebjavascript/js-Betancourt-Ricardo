import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto/producto.service';
import { aplicacion } from '../interfaces/aplicacion';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  AAP:aplicacion;
  idA:number;
  idSO:number;
  constructor(private productoService:ProductoService, private activatedRoute:ActivatedRoute) {
    this.idA = productoService.getId();
    this.idSO=this.activatedRoute.snapshot.params['idSO'];
    console.log(this.idA);
   }
    
  ngOnInit() {
  }
  
  guardarProducto(formulario:NgForm){
    this.AAP={
    idA:this.idA,
    pesoGigas:formulario.value.pesoA,
    version:formulario.value.versionA,
    nombre: formulario.value.nombreA,
    urlDescarga:formulario.value.urlA,
    fechaLanzamiento:formulario.value.fechaA,
    costo:formulario.value.costoA,
    idSO:this.idSO
    };
    this.productoService.setProductos(this.AAP);
    console.log(this.productoService.getId()); }
  
}
