// Angular.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Componentes.
import { AppComponent } from './app.component';

// Librerías externas.
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// Módulos.
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    CoreModule,

    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
