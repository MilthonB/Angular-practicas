import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:'
  private apiKey = 'AIzaSyCKTXgXMV8L9jjpphd5HWv1G296J_0cOLc'
  //crear nuevos usuarios
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //iniciar secion con contraseña
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http:HttpClient ) { }



  logOut(){}

  logIn(usuarios: UsuarioModel){}

  nuevoUsuario(usuario: UsuarioModel){

    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true,
    };

    return this.http.post(
      `${ this.url}signUp?key=${this.apiKey}`,
      authData
    );




  }



}
