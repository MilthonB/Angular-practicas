import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {

    nombre  : "Lorenzo",
    apellido: "Primitivo",
    correo  : "elprimi_75@gmail.com",
    pais    : 'MEX'

  }

  paises: any[] = [];

  constructor( private paisSerive: PaisService ) { }

  ngOnInit(): void {

      this.paisSerive.getPaises()
          .subscribe( paises => {
            this.paises = paises;

            this.paises.unshift({
              nombre: '[Seleccione país]',
              codigo:''
            });
            console.log(this.paises);
          });

  }


  guardar( forma: NgForm){


    if(forma.invalid){

      Object.values( forma.controls ).forEach( control => {

        control.markAsTouched();

      });
      return;

    }

    console.log(forma.value);
  }
}
