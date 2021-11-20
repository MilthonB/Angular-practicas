import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../provider/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

  constructor(private servicio: AuthService) { }

  

}
