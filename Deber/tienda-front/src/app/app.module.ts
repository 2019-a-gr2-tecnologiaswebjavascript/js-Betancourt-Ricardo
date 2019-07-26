import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpSailsPrincipalService } from './servicios/http-sails-principal.service';
import { ProductoHttpService } from './servicios/producto-http-service.service';
import { ProductoTiendaHttpServiceService } from './servicios/producto-tienda-http-service.service';
import { TiendaHttpServiceService } from './servicios/tienda-http-service.service';
import { ProductoTiendaComponent } from './producto-tienda/producto-tienda.component';
import { CarritoComponent } from './carrito/carrito.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductoCarritoComponent } from './producto-carrito/producto-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoTiendaComponent,
    CarritoComponent,
    TiendaComponent,
    ProductoCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpSailsPrincipalService,
    ProductoHttpService,
    ProductoTiendaHttpServiceService,
    TiendaHttpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
