import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   exstencia: new FormControl(5),
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: ['Rtx 4080ti'],
    precio: [0],
    existencias: [0],
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

}
