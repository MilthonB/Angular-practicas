import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.serice';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {


  heroes:any = [];
  constructor(private _activedRoute:ActivatedRoute,
              private _heroesService:HeroesService 
    ) { 

     this._activedRoute.params.subscribe( params =>{
       this.heroes = this._heroesService.buscarHeroe(params['nombre']);
       console.log(this.heroes);
     });

  }

  ngOnInit(): void {
  }

}
