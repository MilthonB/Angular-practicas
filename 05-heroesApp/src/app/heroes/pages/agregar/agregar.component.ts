import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";

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
               private router: Router ) { }

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
            console.log('Heroe actualizado')
          } );
    }else{
      // crear
      this.heroesServicios.agregarHeroe( this.heroe )
          .subscribe( heroe => {
            console.log('Hero agregado:',heroe)
            this.router.navigate(['/heroes/editar',heroe.id]);
          });
    }

  }

  borrarHeroe(){
    this.heroesServicios.eliminarHeroe( this.heroe.id! )
        .subscribe( resp => {
          this.router.navigate(['/heroes'])
        } );
  }

}
