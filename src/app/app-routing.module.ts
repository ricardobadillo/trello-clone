// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { BoardsComponent } from './trello/pages/boards/boards.component';
import { LoginComponent } from './core/pages/login/login.component';



const routes: Routes = [
  { path: 'boards', loadChildren: () => import('./trello/trello.module').then(m => m.TrelloModule) },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
