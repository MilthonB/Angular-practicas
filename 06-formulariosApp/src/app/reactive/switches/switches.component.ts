import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  
  miFormulario: FormGroup = this.fb.group({
    genero: ['M',Validators.required],
    notificaciones: [true,Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    });

    this.miFormulario.valueChanges
        // .subscribe( form => {
          // delete form.condiciones
          .subscribe( ({condiciones, ...rest}) => {
          this.persona = rest;
        })

  }

  guardar(){


    const formvalue = {...this.miFormulario.value};
    delete formvalue.condiciones;

    this.persona = formvalue;

  }

}
