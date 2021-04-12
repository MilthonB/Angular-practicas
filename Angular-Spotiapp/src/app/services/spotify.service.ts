import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient ) { 
    console.log('Spotify service listo ');
  }

  
  

  getQuery(query:string){

    const url = `https://api.spotify.com/v1/${query}`;

    const HEADERS  = new HttpHeaders ({
      // 'Authorization' : Bearer y luego agregar el token
      'Authorization' : //agregar Bearer token de su cuenta de spotify
    });

      return this.http.get(url,{headers:HEADERS});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
            .pipe( map( (data:any) => data['albums'].items ) );
    
  }

  getArtistas(termino : string){

    

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
        .pipe(map((data:any) => data['artists'].items ));
    

  }
   

  getArtista(id : string){

    console.log(id, "recibido"); 
    return this.getQuery(`artists/${id}`);


  }
  
  
  getTopTrack(id : string){

    
    return this.getQuery(`artists/${id}/top-tracks?market=ES`);


  }
  




  
}
