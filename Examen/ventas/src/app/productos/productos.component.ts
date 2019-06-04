import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { aplicacion } from '../interfaces/aplicacion';
import { ProductoService } from '../servicios/producto/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:aplicacion[];
  query:string;
  idSO:number;
  idA:number;
  constructor(private activatedRoute:ActivatedRoute, private productoService:ProductoService) { 
    this.idSO=this.activatedRoute.snapshot.params['idSO'];
    this.productos=productoService.getProducto(this.idSO);
    console.log(this.idSO);
    console.log(this.productos)
  }

  ngOnInit() {
  }


  eliminar(producto){
    this.productoService.eliminar(producto.idA);
    this.productos=this.productoService.getProducto(this.idSO);
   }

}
