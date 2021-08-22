import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor( private authServices: AuthService,
               private router : Router ){}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    
      // if( this.authServices.auth.id ){
      //   return true;
      // }

      // console.log('Bloqueado por el AuthGuard - CanActivate');
      // return false;
      return this.authServices.verificaAutenticacion()
                 .pipe(
                   tap( estaAuteticado => {
                     if(!estaAuteticado){
                       this.router.navigate(['./auth/login']);  
                     }
                   } )
                 );
  }


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
   
      return this.authServices.verificaAutenticacion()
                 .pipe(
                   tap( estaAuteticado => {
                     if(!estaAuteticado){
                       this.router.navigate(['./auth/login']);  
                     }
                   } )
                 );
      // if( this.authServices.auth.id ){
      //   return true;
      // }

      // console.log('Bloqueado por el AuthGuard- CanLoad');
      // return false;
  }

}
