import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private readonly _authService:AuthService) { }
  nombreCajero:string = '';
  
  ngOnInit() {
  }

  verificar(){
    this._authService.verificar(this.nombreCajero);

  }
  
}
