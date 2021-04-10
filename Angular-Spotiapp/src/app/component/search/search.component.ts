import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {


  artistas: any[] = [];  

  loading:boolean = false;
  constructor(private spotify: SpotifyService,
              private _router: Router) { 
  }
  

    // arreglar el loading para que no se repita cuando no hay caracteres 

  buscar(termino:string){
    this.loading = true;
    
    this.spotify.getArtistas(termino).
    subscribe((data:any) =>{ 
      
      this.artistas = data;
      this.loading=false;
      
    } );
  }

  verArtista(id: string){

    console.log(id);
    this._router.navigate(['/artist',id]);
  
  }




}
