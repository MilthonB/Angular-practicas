import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre : string = 'Milthon';
  genero : string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }  

  // i18nPlural
  clientes: string[] = ['Maria','Pedro', 'Tonto', 'Estupido'];
  clientesMapa = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  };

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente(){
    this.nombre = 'Melissa';
    this.genero = 'femenino'  
  }
  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre : 'Milthon',
    edad : 35,
    direccion: 'Sonora, México'
  }

  //json pipe
  heroes = [
    {
      nombre : "Goku",
      ki : '523565'
    },
    {
      nombre : "Vegeta",
      ki : '523565'
    },
    {
      nombre : "Picoro",
      ki : '523565'
    }
  ]

//Async pipe

  miObsrvable = interval(1000)
  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() =>{
      resolve('Tenemos data de promesa')
    },3500)
  });

}
