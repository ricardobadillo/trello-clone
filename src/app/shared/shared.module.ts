// Angular.
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Angular CDK.
import { OverlayModule } from '@angular/cdk/overlay';

// Componentes.
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Librerías externas.
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ButtonComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,

    OverlayModule,

    FontAwesomeModule,
  ],
  exports: [
    ButtonComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
