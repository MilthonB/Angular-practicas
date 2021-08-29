import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fbuild.group({
    email    : ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor( private fbuild: FormBuilder,
               private router: Router ) { }

  ngOnInit(): void {
  }


  login(){
    this.router.navigateByUrl('/dashboard')
  }

}
