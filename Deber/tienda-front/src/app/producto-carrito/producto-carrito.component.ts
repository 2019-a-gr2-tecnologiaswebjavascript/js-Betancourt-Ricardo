import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto-carrito',
  templateUrl: './producto-carrito.component.html',
  styleUrls: ['./producto-carrito.component.css']
})
export class ProductoCarritoComponent implements OnInit {

  @Input()
  nombre

  @Input()
  tienda

  @Input()
  cantidad


  constructor() { }

  ngOnInit() {
  }

}
