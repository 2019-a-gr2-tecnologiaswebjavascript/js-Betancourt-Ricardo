import { Component, OnInit } from '@angular/core';
import { CarritoServiceService } from '../servicios/carrito-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carritoDeCompras

  constructor(private readonly _carritoService : CarritoServiceService) { }

  ngOnInit() {
    this.carritoDeCompras = this._carritoService.carritoCompras
  }

}
