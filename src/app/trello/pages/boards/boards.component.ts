// Angular.
import { Component } from '@angular/core';

// Librerías externas.
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faBox, faClock, faWaveSquare } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

  faBox = faBox;
  faClock = faClock;
  faTrello = faTrello;
  faWaveSquare = faWaveSquare;
}
