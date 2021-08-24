import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule
  ]
})
export class AuthModuleModule { }
