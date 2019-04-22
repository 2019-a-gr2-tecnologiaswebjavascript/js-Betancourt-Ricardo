import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import { CarritoService } from './servicios/carrito/carrito.service';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';

@NgModule({
  declarations: [ //Componentes
    AppComponent,
    ItemGaleriaComponent,
    MostrarCarritoComponent
  ],
  imports: [ //Otros modulos
    BrowserModule //Comparte la funcionalidad de las directiva
  ],
  providers: [ //Servicios
    CarritoService
  ],
  bootstrap: [ //Componente principal
    AppComponent
  ]
})
export class AppModule { }
