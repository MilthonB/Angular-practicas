import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder) { 

    this.crearFormulario();

  }

  ngOnInit(): void {
  }



  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  } 

  get apellidoNoValido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  } 

  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  } 

  crearFormulario(){
    //nombre:['valor que deseas establecer como defecto',
    //'validadores sincronos',
    //'valores asincronos ]

    //validadores sincronos que se pueden hacer de inmediatamente 
    //y que no requieren respuesta de algun servicio 



    //nombre: ['',],
      this.forma = this.fb.group({
        nombre  : ['', [Validators.required, Validators.minLength(5)]],
        apellido: ['', [Validators.required, Validators.minLength(5)]],
        correo  : ['', [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"), Validators.required]
      ],
      });
      
  }


  guardar(){

    if(this.forma.invalid){
     return  Object.values(this.forma.controls).forEach( control => {
        control.markAllAsTouched();
      });
    }
    console.log(this.forma);
  }




}
