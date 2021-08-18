import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower : string = "milthon"
  nombreUpper : string = "MILTHON"
  nombreCompleto : string = "MiltHoN"

  fecha : Date = new Date();// fecha actula del momento


  constructor() { }

  ngOnInit(): void {
  }



}
