// Angular.
import { Component } from '@angular/core';

// Librerías externas.
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  faBell = faBell;
  faInfoCircle = faInfoCircle;

  isOpen: boolean = false;
  itemList: { name: string  }[] = [
    { name: 'Perfil' },
    { name: 'Actividad' },
    { name: 'Configuración' },
    { name: 'Sign out' },
  ];
}
