import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern( this.sv.nombreApellidoPattern )]],
    email: ['', [Validators.required, Validators.pattern( this.sv.emailPattern )]],
    username: ['', [Validators.required, this.sv.noPuedeSerTonto]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  },{
    validators: [ this.sv.camposIguales('password','password2') ]
  })


  constructor( private fb: FormBuilder,
               private sv: ValidatorsService ) { }

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
