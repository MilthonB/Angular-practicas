import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisSmall } from '../../interfaces/pais.iterface';
import { PaisesServicesService } from '../../services/paises-services.service';


@Component({
  selector: 'app-selector-paises',
  templateUrl: './selector-paises.component.html',
  styles: [
  ]
})
export class SelectorPaisesComponent implements OnInit {


  regiones: string[] = [];
  paises: PaisSmall[] = [];

  miFormulario: FormGroup = this.fb.group(
    {
      region: ['',Validators.required],
      pais: ['',Validators.required]
    }
  );


  constructor( private fb: FormBuilder,
               private paisesService: PaisesServicesService ) { }

  ngOnInit(): void {

    this.regiones = this.paisesService.regiones;



    //Cuado cambie la region

    this.miFormulario.get('region')?.valueChanges
                     .subscribe( region => {
                       this.paisesService.getPaisesPorRegion(region)
                           .subscribe( paises => {
                             console.log(paises);
                             this.paises = paises;
                           })
                     })

  }


  guardar(){

  }

}
