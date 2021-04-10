import { Route } from '@angular/compiler/src/core';
import { Host } from '@angular/core';
import { Routes } from '@angular/router';
import { ArtistaComponent } from './component/artista/artista.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'artist/:id', component: ArtistaComponent},
    {path: '',pathMatch:'full', redirectTo: 'home'},
    {path: '**',pathMatch:'full', redirectTo: 'home'},
];

