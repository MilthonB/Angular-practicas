import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fbuild.group({
    email    : ['luriaz@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })

  constructor( private fbuild: FormBuilder,
               private router: Router,
               private authServices: AuthService ) { }

  ngOnInit(): void {
  }


  login(){
    const { email, password } = this.miFormulario.value;
    
    this.authServices.login( email, password)
        .subscribe( resp => {
          console.log(resp)
        } );
    // this.router.navigateByUrl('/dashboard')
  }

}
