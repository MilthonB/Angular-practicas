import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {


  ventasNetas: number = 256678898.5567
  porcentaje: number = 0.4856;
  
  constructor() { }

  ngOnInit(): void {
  }

}
