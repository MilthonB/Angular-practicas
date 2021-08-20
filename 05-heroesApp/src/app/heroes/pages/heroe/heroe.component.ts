import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  constructor( private activeRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    console.log( this.activeRoute.snapshot.params.id );
  }

}
