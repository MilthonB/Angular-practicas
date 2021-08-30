import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      *{
        margin:15px
      }
    `
  ]
})
export class DashboardComponent implements OnInit {


  constructor( private router: Router,
               private authService: AuthService ) { 
               }

  ngOnInit(): void {
  }

  get usuario(){
    return this.authService.Usuario;
  }

  logOut(){
    this.router.navigateByUrl('/auth');
    this.authService.logOut();
  }

}
