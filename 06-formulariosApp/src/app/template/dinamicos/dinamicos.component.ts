import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favoritos[]  
}

interface Favoritos {
    id: number;
    nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  nuevoJuego: string = "";

  persona: Persona = {
    nombre:'Milthon',
    favoritos: [
      {
        id:1,
        nombre:'Metal Gear'
      },
      {
        id:2,
        nombre:'Metal slugr'
      }
    ]
  }


  constructor() { }

  ngOnInit(): void {
  }

  eliminar( index: number ){
    this.persona.favoritos.splice(index,1)
  }

  guardar(){

  }

  agregarJuego(){
    const nuevoFavorito: Favoritos = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push( {...nuevoFavorito} )  
    this.nuevoJuego = ""
  }


}
