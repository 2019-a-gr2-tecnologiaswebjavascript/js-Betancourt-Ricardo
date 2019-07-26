import { Component, OnInit, Input } from '@angular/core';
import { ProductoHttpService } from '../servicios/producto-http-service.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  @Input()
  titulo

  @Input()
  id

  @Input()
  productos

  imageURL

  detalleProductos = []

  constructor(private readonly _productoService : ProductoHttpService) { }

  ngOnInit() {
    console.log(this.productos)
    this.imageURL = "http://localhost:1337/picture?id=" + this.id
    this.productos.forEach(async (element) => {
      const $producto = await this._productoService.buscarPorId(element.producto_FK)
      $producto.subscribe(
        (result) => {
          this.detalleProductos.push(result)
        },
        (error) => {
          console.log(error)
        }
      )
    });
    console.log(this.detalleProductos)
  }

}
