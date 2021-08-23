import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miformulatio') miformulario!: NgForm;



  constructor() { }

  ngOnInit(): void {
  }

  nombrevalido(): boolean{
    return this.miformulario?.controls.producto?.invalid &&
           this.miformulario?.controls.producto?.touched
  }

  numeroValido(): boolean {
    return this.miformulario?.controls.precio?.touched
            && this.miformulario?.controls.precio?.value < 0
  }

  guardar( ){
    console.log( this.miformulario.value )
  }

}
