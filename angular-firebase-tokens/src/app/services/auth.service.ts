import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:'
<<<<<<< HEAD
  private apiKey = 'AIzaSyCKTXgXMV8L9jjpphd5HWv1G296J_0cOLc'

  userToken: string;

=======
  private apiKey = 'APIWEB FIREBASE'
>>>>>>> 871132b57f15c516aa98836ac5422efbca2e2ea7
  //crear nuevos usuarios
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //iniciar secion con contraseña
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http:HttpClient ) { }



  logOut(){}

  logIn(usuario: UsuarioModel){

    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http.post(
      `${ this.url}signInWithPassword?key= ${this.apiKey}`,
      authData
    );

  }

  nuevoUsuario(usuario: UsuarioModel){

    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http.post(
      `${ this.url}signUp?key=${this.apiKey}`,
      authData
    );




  }


  private guardarToken( idToken: string ){

    this.userToken == idToken;
    localStorage.setItem('token', idToken);

  }


  leerToekn(){

    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = "";
    }

    return this.userToken;

  }



}
