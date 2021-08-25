import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisSmall } from '../../interfaces/pais.iterface';
import { PaisesServicesService } from '../../services/paises-services.service';
import { switchMap,tap } from 'rxjs/operators';


@Component({
  selector: 'app-selector-paises',
  templateUrl: './selector-paises.component.html',
  styles: [
  ]
})
export class SelectorPaisesComponent implements OnInit {


  regiones : string[] = [];
  paises   : PaisSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSmall[] = [];

  cargando: boolean = false;

  miFormulario: FormGroup = this.fb.group(
    {
      region: ['',Validators.required],
      pais: ['',Validators.required],
      frontera: ['',Validators.required],
    }
  );


  constructor( private fb: FormBuilder,
               private paisesService: PaisesServicesService ) { }

  ngOnInit(): void {

    this.regiones = this.paisesService.regiones;



    //Cuado cambie la region

    this.miFormulario.get('region')?.valueChanges
        .pipe(
          tap( (_)  => {
            this.miFormulario.get('pais')?.reset('');
            this.cargando = true;
          }),
          switchMap( region => {
            return this.paisesService.getPaisesPorRegion(region)
          })
        ).subscribe( paises => {
          this.cargando = false;
            console.log('paises',paises);
            this.paises = paises;
        })
                 
    this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap((_) => {
            this.cargando = true;
            this.miFormulario.get('frontera')?.reset();
          }),
          switchMap( codigo => this.paisesService.getPaisPorCodigo(codigo)),
          switchMap( pais => this.paisesService.getPaisesPorCodigos(pais?.borders!))
        ).subscribe( paises => {
          this.cargando = false;
          console.log(paises)
          this.fronteras = paises;
          // this.fronteras = pais?.borders || [];
        })  
  }


  guardar(){

  }

}
