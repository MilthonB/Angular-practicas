import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {


  color: string = 'red';
  mensaje: string = 'Milthon'

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: ['', Validators.required]
    }
  );

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }


  guardar(){

  }

  tieneError( campo: string ): boolean{
    return this.miFormulario.get(campo)?.invalid || false
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

  cambiarNombre(){
     this.mensaje = Math.random().toString();
  }

}
