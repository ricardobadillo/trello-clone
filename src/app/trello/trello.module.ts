// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Componentes.
import { BoardsComponent } from './pages/boards/boards.component';

// Librerías externas.
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Módulos.
import { SharedModule } from '../shared/shared.module';
import { TrelloRoutingModule } from './trello-routing.module';



@NgModule({
  declarations: [ BoardsComponent ],
  imports: [
    CommonModule,

    SharedModule,
    TrelloRoutingModule,

    FontAwesomeModule
  ]
})
export class TrelloModule { }
