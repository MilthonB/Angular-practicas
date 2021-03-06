import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { ValidacionPasswordService } from '../../../shared/validators/validacion-password.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern( this.sv.nombreApellidoPattern )]],
    email: ['', [Validators.required, Validators.pattern( this.sv.emailPattern )], [this.se]],
    username: ['', [Validators.required, this.sv.noPuedeSerTonto]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  },{
    validators: [ this.sv.camposIguales('password','password2') ]
  })


  constructor( private fb: FormBuilder,
               private sv: ValidatorsService,
               private se: ValidacionPasswordService, ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Milthon B',
      email:'tests1@gmail.com',
    })
  }

  get erroresEmail() {
    const errors =  this.miFormulario.get('email')?.errors;
    if( errors?.required ){
      return 'El correo es obligatorio'
    }else if( errors?.pattern ) {
      return 'Tiene que tener formato de correo'
    }else if( errors?.emailTomado ){
      return 'Ese correo ya fue tomado'
    }
    return ''
  }

  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.invalid 
           && this.miFormulario.get(campo)?.touched
  }




  submitFormulario(){

    this.miFormulario.markAllAsTouched();

  }

}
