import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { compileNgModule } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EstaLogueadoService  implements CanActivate{
  
  constructor(private readonly _authService:AuthService,
              private readonly _router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      const tieneNombre = this._authService.ingresoNombreCajero;
      if(tieneNombre){
        console.log('Bienvenido');
        return true;
      }else{
        const url = ['/inicio'];
        console.log('Error');
        this._router.navigate(url);
        return false;
      }
      
  }

}
