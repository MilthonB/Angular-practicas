import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisSmall } from '../interfaces/pais.iterface';
import { Observable, of } from 'rxjs';
import { Border } from '../interfaces/border.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesServicesService {



  private _baseUrl: string = "https://restcountries.eu/rest/v2"
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']


  get regiones(): string[]{
    return [...this._regiones];
  }



  constructor( private http: HttpClient ) { }


  getPaisesPorRegion( region: string ): Observable<PaisSmall[]>{
     
    const url: string = `${this._baseUrl}/region/${region}?fields=alpha3Code;name`
    return this.http.get<PaisSmall[]>( url );

  }

  getPaisPorCodigo( codigo: string): Observable<Border | null>{

    if( !codigo ){
      return of(null);
    }
    const url = `${this._baseUrl}/alpha/${codigo}`
    return this.http.get<Border>( url );
  
  }


}
