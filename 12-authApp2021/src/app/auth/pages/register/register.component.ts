import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fbuild.group({
    name    : ['', [Validators.required]],
    email   : ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor( private fbuild: FormBuilder,
              private router: Router ) { }

  ngOnInit(): void {
  }

  registrar(){
    this.router.navigateByUrl('/dashboard')

  }

}
