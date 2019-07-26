import { Component, OnInit, Input } from '@angular/core';
import { ItemCarrito } from '../dto/item-carrito';
import { CarritoServiceService } from '../servicios/carrito-service.service';

@Component({
  selector: 'app-producto-tienda',
  templateUrl: './producto-tienda.component.html',
  styleUrls: ['./producto-tienda.component.css']
})
export class ProductoTiendaComponent implements OnInit {
  @Input()
  nombreProducto

  @Input()
  descripcion

  @Input()
  tienda

  constructor(private readonly _carritoService : CarritoServiceService) { }

  ngOnInit() {

  }

  agregarAlCarrito(){
    const itemCarrito : ItemCarrito = {
      nombreProducto : this.nombreProducto,
      nombreTienda : this.tienda
    }
    this._carritoService.agregarAlCarrito(itemCarrito)
  }

}
