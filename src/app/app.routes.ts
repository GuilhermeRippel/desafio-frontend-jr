import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Desafio1Component } from './components/desafio1/desafio1.component';
import { Desafio2Component } from './components/desafio2/desafio2.component';

//A raiz do projeto é uma pequena porta de entrada com dois botões que levam para os desafios e aqui estão suas rotas
export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'desafio1', component: Desafio1Component},
    {path: 'desafio2', component: Desafio2Component}
];
