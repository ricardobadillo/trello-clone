// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { BoardsComponent } from './pages/boards/boards.component';



const routes: Routes = [
  { path: '', component: BoardsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrelloRoutingModule { }
