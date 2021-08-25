import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-paises',
  templateUrl: './selector-paises.component.html',
  styles: [
  ]
})
export class SelectorPaisesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group(
    {
      region: ['',Validators.required]
    }
  );


  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

}
