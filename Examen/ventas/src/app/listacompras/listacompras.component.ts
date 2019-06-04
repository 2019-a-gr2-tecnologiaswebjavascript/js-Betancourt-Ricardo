import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';
import { compra } from '../interfaces/compra';

@Component({
  selector: 'app-listacompras',
  templateUrl: './listacompras.component.html',
  styleUrls: ['./listacompras.component.css']
})
export class ListacomprasComponent implements OnInit {
  compras:compra[];
  constructor(private carritoService:CarritoService) { 
    this.compras=carritoService.getCompras();
  }
      ngOnInit() {
  }

}
