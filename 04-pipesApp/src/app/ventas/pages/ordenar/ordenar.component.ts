import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  ordernarPor: string = 'sin valor';

  mayuscula : boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Deredevil',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde  
    }
];



  constructor() { }

  ngOnInit(): void {
  }

  cambiarMayusculas(){
    this.mayuscula = !this.mayuscula;
  }

  cambiarTabla( tipo : string ){
    this.ordernarPor = tipo;
  }

}
