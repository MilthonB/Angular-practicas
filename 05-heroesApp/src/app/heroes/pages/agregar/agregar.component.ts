import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from '../../components/confirmacion/confirmacion.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {


  publishers = [
    {
      id:'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    alter_ego : "",
    characters: "",
    alt_img: "",
    first_appearance: "",
    superhero: "",
    publisher: Publisher.DCComics
    
  }



  constructor( private heroesServicios: HeroesService,
               private activeRoute: ActivatedRoute,
               private router: Router,
               private snackbar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editar') ) return

      this.activeRoute.params.pipe(
        switchMap( ({ id }) => this.heroesServicios.getHeroePorId( id ) )
      ).subscribe( heroe => this.heroe = heroe);

  }

  guardar(){

    if( this.heroe.superhero.length === 0 ){
      return
    }

    if( this.heroe.id ){
      //actualizar
      this.heroesServicios.editarHeroe( this.heroe )
          .subscribe( resp => {
            this.mensaje('El Héroe se actualizo')
            console.log('Heroe actualizado')
          } );
    }else{
      // crear
      this.heroesServicios.agregarHeroe( this.heroe )
          .subscribe( heroe => {
            console.log('Hero agregado:',heroe)
            this.mensaje('El Héroe se creo')
            this.router.navigate(['/heroes/editar',heroe.id]);
          });
    }

  }

  borrarHeroe(){

    const dialgRef = this.dialog.open(ConfirmacionComponent, { data: this.heroe });

    dialgRef.afterClosed().pipe(
        switchMap( result => {
          return (result) ? this.heroesServicios.eliminarHeroe( this.heroe.id! ) : []
        } )
    ).subscribe( () => this.router.navigate(['/heroes']));

  }

  mensaje( mensaje: string ): void{
    this.snackbar.open( mensaje, 'Ok!',{ duration:2000 } );
  }

}
