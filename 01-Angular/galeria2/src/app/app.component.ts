import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Floreria';
  estaMostrando = false;

  arregloFlores = [
    new Flor("Papitas","A lo bestia"),
    new Flor("Carnitas","Gorditas")
  ];

  arregloFloresJS = [
    {
      titulo: "Don Jose",
      nombre:"Papitas",
      descripcion:"A lo bestia",
      notas: [
        'Papitas',
        'Empanadas'
      ]
    },
    {
      titulo: "Doña Maria",
      nombre:"Carnitas",
      descripcion:"Gorditas",
      notas: [
        'Motes',
        'Fritada'
      ]
    }
  ]

  constructor(private readonly _carritoService:CarritoService){

  }

  cambioChela(evento:boolean){
    console.log("Llego a chela: ", evento)
  }

  cambioBiela(evento:boolean){
    console.log("Llego a biela: ", evento)
  }

  mostrar(estaMostrando){
    this.estaMostrando = estaMostrando;
  }

}

class Flor{
    
  constructor(
    public nombre:string,
    public descripcion:string
  ){   
  }

}
