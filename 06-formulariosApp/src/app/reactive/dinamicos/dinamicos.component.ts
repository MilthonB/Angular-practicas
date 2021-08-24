import { FormattedError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Metal Gear', Validators.required],
      ['Metal Slug', Validators.required],
    ], Validators.required )
  });


  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray ;
  }

  compoEsValido( campo : string ){
    return this.miFormulario.controls[campo].touched 
           && this.miFormulario.controls[campo].errors
  }


  guardar(){
    
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
  
  }

}
