import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CarritoService } from '../servicios/carrito/carrito.service';
import {ItemCarritoCompras} from '../interfaces/item-carrito-conoras';

@Component({
  selector: 'app-item-galeria',
  templateUrl: './item-galeria.component.html',
  styleUrls: ['./item-galeria.component.css']
})
export class ItemGaleriaComponent implements OnInit, OnDestroy {

  title = "Licoreria";

  @Input()
  titulo;

  @Input()
  textoBoton;
  
  @Input()
  nombreItem;

  @Output()
  cambioChela:EventEmitter<boolean> = new EventEmitter()

  @Output()
  cambioBiela:EventEmitter<boolean> = new EventEmitter()

  url = "https://http2.mlstatic.com/biela-de-motor-original-peugeot-207-14-nafta-D_NQ_NP_782765-MLA26076182164_092017-F.jpg"

  @Input()
  notas;

  color = "rojo"

  //Dependency
  //Injection
  constructor(private readonly _carritoService:CarritoService) { //ModificadorDeAcceso, inmutabilidad, alias:tipoDeDato 
    
  }

  ngOnInit() {
    console.log("Empezo");
    console.log(this._carritoService.carritoCompras);
  }

  ngOnDestroy(){
    console.log('Terminó');
  }

  agregarCarrito(valorCarrito:string){
    const itemCarrito :ItemCarritoCompras = {
      valor : valorCarrito,
      nombreTienda: this.titulo,
      fechaCompra : new Date()
    };
    this._carritoService.carritoCompras.splice(0,0,itemCarrito);
    console.log(this._carritoService.carritoCompras);
  }

  alertar(){
    alert('Auxilio me desmayo ' + this.nombreItem);
  }

  alertarBlur(){
    alert('Alertar blur')
  }

  cambiarImagen(){
    const bielas = "https://http2.mlstatic.com/biela-de-motor-original-peugeot-207-14-nafta-D_NQ_NP_782765-MLA26076182164_092017-F.jpg"
    const chelas = "https://media-cdn.tripadvisor.com/media/photo-s/09/0f/ad/dd/chelas.jpg"
    if (this.url == bielas){
      this.url = chelas
      this.cambioChela.emit(true);
      this.color= "chela";
    }else{
      this.url = bielas
      this.cambioBiela.emit(true);
      this.color = "biela";
  }

  

  /*class CarritoCompraClass implements CarritoComprasInt{
    nombreTienda: string;
    valor: string;
    fechacompra?:Date;
  }
*/
    
  



}

}



  

/*
@DecoratorsClase() //->Funciones que se ejecutan antes de clases, atributos, constructores, metodos
class Usuario{
  @DecoratorAtributo()
  private nombre = 'Jose';
    
  constructor(@DecoratorsConstructor() nombre){

  }
  @DecoratorsMetodo()
  metodoPublico(){

  }

  private metodoPrivado(){

  }

  protected metodoProtected(){

  }

}
*/


/*  
Cuando agrego un item al arreglo debo guardar su cantidad
En el item nos hace falta

id = valor
1) verificar si ya existe ese item -> valor
1.1 Existe
  aumentamos el contador
1.2 No existe
  creamos el contador y lo seteamos el 1
*/
