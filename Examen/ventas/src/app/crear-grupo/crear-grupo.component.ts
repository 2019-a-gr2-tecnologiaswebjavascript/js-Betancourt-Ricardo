import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sistemas_Operativo } from '../interfaces/Sistemas_operativo';
import { GrupoService } from '../servicios/grupo/grupo.service';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css']
})
export class CrearGrupoComponent implements OnInit {
  SO:Sistemas_Operativo;
  idSO:number;
  constructor(private gruposervice:GrupoService) { 
    this.idSO = gruposervice.getId();
    console.log(this.idSO);
  }

  ngOnInit() {
  }

  guardarGrupo(formulario:NgForm){
    console.log(formulario.value.nombreSO);
    this.SO={
    idSO:this.idSO,
    nombre:formulario.value.nombreSO,
    version:formulario.value.versionSO,
    fechaLanzamiento:formulario.value.fechaSO,
    pesoGigas:formulario.value.pesoSO,
    instalado:formulario.value.instaladoSO
    };
    this.gruposervice.setGrupos(this.SO);
    this.idSO = this.gruposervice.getId();
    console.log(this.idSO);
  }

}
