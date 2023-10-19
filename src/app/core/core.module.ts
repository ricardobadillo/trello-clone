// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Componentes.
import { LoginComponent } from './pages/login/login.component';

// Módulos.
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,

    SharedModule
  ]
})
export class CoreModule { }
