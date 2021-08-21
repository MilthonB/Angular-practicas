import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe; 

  constructor( private activeRoute: ActivatedRoute,
               private  heroesServicios: HeroesService,
               private router : Router ) { }

  ngOnInit(): void {
    this.activeRoute.params.pipe(
      switchMap( ({ id }) => {
        return this.heroesServicios.getHeroePorId( id )
      })
    )
    .subscribe( hheroe => this.heroe = hheroe);
  }


  regresar():void{
    this.router.navigate(['/heroes/listado']);
  }

}
