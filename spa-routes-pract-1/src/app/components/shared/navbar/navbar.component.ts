import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../servicios/heroes.serice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {


  heroes:any = [];
  constructor(private _router:Router,
              private _heroeServicio:HeroesService,
    ) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string){
    this._router.navigate(['/buscador',termino]);
      

  }

}
