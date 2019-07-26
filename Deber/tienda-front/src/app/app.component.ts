import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoHttpService } from './servicios/producto-http-service.service';
import { ProductoTiendaHttpServiceService } from './servicios/producto-tienda-http-service.service';
import { TiendaHttpServiceService } from './servicios/tienda-http-service.service';
import { Tienda } from './dto/tienda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listaTiendas : Tienda
  
  constructor(private readonly _httpClient : HttpClient,
              private readonly _productoHttpService : ProductoHttpService,
              private readonly _productoTiendaHttpService : ProductoTiendaHttpServiceService,
              private readonly _tiendaHttpService : TiendaHttpServiceService){

  }

  ngOnInit(): void {
    console.log('Testing xD')
    const listaTiendas$ = this._tiendaHttpService.buscarTodos()
    listaTiendas$.subscribe(
      (lista) => {
        this.listaTiendas = lista
      },
      (error) => {
        console.log(error)
      }
    )
  }
  
  title = 'tienda-front';

}
