import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  // TODO: temporal
  nombreApellidoPattern: string ="([a-zA-Z]+) ([a-zA-Z]+)";
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerTonto( control: FormControl ){
    const valor = control.value?.trim().toLowerCase();
    if( valor === 'tonto' ){
      return {
        noTonto: true
      }
    }

    return null
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern( this.nombreApellidoPattern )]],
    email: ['', [Validators.required, Validators.pattern( this.emailPattern )]],
    username: ['', [Validators.required, this.noPuedeSerTonto]],
  })


  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Milthon B',
      email:'tests1@gmail.com',
    })
  }

  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.invalid 
           && this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){

    this.miFormulario.markAllAsTouched();

  }

}
