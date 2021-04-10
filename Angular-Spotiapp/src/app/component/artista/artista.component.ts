import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {


  artista: any = {};
  tracks: any[] =[];

  loading: boolean;

  constructor(private _activeRoute: ActivatedRoute,
              private _spotify: SpotifyService) { 

    this.loading = true;
    
    this._activeRoute.params.subscribe( data => {
      
      this.getArtista(data['id']);
      this.getTopTrack(data['id']);
    });
    
  }
  
  
  
  getArtista(id: string){
    
    this.loading = true;
    
    this._spotify.getArtista(id).subscribe( data => {
      console.log("artist component ",data);
      this.artista = data;
      this.loading = false;
   });

  }

  getTopTrack(id: string){
    
    this._spotify.getTopTrack(id).subscribe((data:any) =>{
      console.log(data['tracks']);
      this.tracks = data['tracks'];
    });

  }


}
