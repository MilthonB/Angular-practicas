import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {


  nuevasCanciones: any[] = [];
  loading: boolean;


  constructor(private spotify: SpotifyService,
              private _route: Router) { 
   
    this.loading = true;
    spotify.getNewReleases()
    .subscribe( (data: any ) => {
      this.nuevasCanciones = data;
    });

    this.loading = false
  } 

  verArtista(id:any){

   
    this._route.navigate(['/artist',id])
    

  }

 

}
