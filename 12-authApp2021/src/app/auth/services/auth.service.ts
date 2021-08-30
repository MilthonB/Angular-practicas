import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/auth.interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  constructor(private http: HttpClient) { }

  get Usuario() {
    return { ...this._usuario }
  }


  registro(name: string, email: string, password: string) {

    const url: string = ` ${this._baseUrl}auth/new `;
    const body = {
      name,
      email,
      password
    }

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            localStorage.setItem('token', resp.token!);
            this._usuario = {
              uid: resp.uid!,
              name: resp.name!
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      );;


  }



  login(email: string, password: string) {

    const url: string = ` ${this._baseUrl}auth/ `;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            localStorage.setItem('token', resp.token!);
            this._usuario = {
              uid: resp.uid!,
              name: resp.name!
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.msg))
      );

  }

  validarToken(): Observable<boolean> {

    const url: string = ` ${this._baseUrl}auth/renew `;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {
          localStorage.setItem('token', resp.token!);
          this._usuario = {
            uid: resp.uid!,
            name: resp.name!
          }
          return resp.ok;
        }),
        catchError(err => of(false))
      );

  }


  logOut() {
    localStorage.clear();
  }
}
