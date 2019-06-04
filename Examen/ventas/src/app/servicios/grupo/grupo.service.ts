import { Injectable } from '@angular/core';
import { Sistemas_Operativo } from 'src/app/interfaces/Sistemas_operativo';
import { GruposComponent } from 'src/app/grupos/grupos.component';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  grupos:Sistemas_Operativo[]=[];
  idSO:number=0;
  nombreSO="";
  constructor() { 
    console.log(this.grupos);
  }

  getGrupos(){
    return this.grupos;    
  }
  getId(){
    return this.idSO;
  }
  setGrupos(grupo:Sistemas_Operativo){
    this.grupos.push(grupo);
    this.idSO++;
    console.log(this.grupos);
  }

  eliminar(index:number){
    this.grupos.splice(index,1);
  }

  buscariD(idSO:number){
    this.grupos.forEach(element => {
      if(idSO==element.idSO){
         this.nombreSO=element.nombre;
      }
    });
    

  }
}
