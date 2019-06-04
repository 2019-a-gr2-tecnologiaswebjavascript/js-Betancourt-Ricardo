import { Component, OnInit } from '@angular/core';
import { Sistemas_Operativo } from '../interfaces/Sistemas_operativo';
import { GrupoService } from '../servicios/grupo/grupo.service';
import { element } from '@angular/core/src/render3';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  grupos:Sistemas_Operativo[];
  query:string;
  idSO:number;
  constructor(private grupoService: GrupoService) {
    this.grupos=grupoService.getGrupos();
    console.log(this.grupos);
   }

  ngOnInit() {
  }

 eliminar(grupo){
  this.grupos.forEach(element => {
     
     if(grupo.idSO === element.idSO){
        console.log(this.grupos.indexOf(element));
        this.grupoService.eliminar(this.grupos.indexOf(element));
        
     }
  });
 }
}
