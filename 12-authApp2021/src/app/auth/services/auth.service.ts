import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/auth.interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl;
 
  constructor( private http: HttpClient ) { }


  login( email: string, password: string ): Observable<AuthResponse> {

    const url : string = ` ${ this._baseUrl }auth/ `;
    const body = { email, password };

    return this.http.post<AuthResponse>( url, body );

  }
}
