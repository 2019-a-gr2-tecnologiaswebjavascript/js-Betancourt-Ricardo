import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { GruposComponent } from './grupos/grupos.component';
import { ProductosComponent } from './productos/productos.component';
import { CajeroComponent } from './cajero/cajero.component';
import { ListacomprasComponent } from './listacompras/listacompras.component';
import { Routes, RouterModule } from '@angular/router';
import { EstaLogueadoService } from './servicios/guards/esta-logueado.service';
import { AuthService } from './servicios/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { CrearGrupoComponent } from './crear-grupo/crear-grupo.component';
import { SearchPipe } from './pipes/search';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';


const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'menu', component: MenuComponent, canActivate:[EstaLogueadoService]},
  {path: 'grupos', component: GruposComponent, canActivate:[EstaLogueadoService]},
  {path: 'productos/:idSO', component: ProductosComponent, canActivate:[EstaLogueadoService]},
  {path: 'cajero', component: CajeroComponent, canActivate:[EstaLogueadoService]},
  {path: 'listaCompras', component: ListacomprasComponent, canActivate:[EstaLogueadoService]},
  {path: 'crearGrupo', component: CrearGrupoComponent, canActivate:[EstaLogueadoService]},
  {path: 'crearProducto/:idSO', component: CrearProductoComponent, canActivate:[EstaLogueadoService]}
];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    GruposComponent,
    ProductosComponent,
    CajeroComponent,
    ListacomprasComponent,
    CrearGrupoComponent,
    SearchPipe,
    CrearProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule
  ],
  providers: [EstaLogueadoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
