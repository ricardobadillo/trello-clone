// Angular.
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {

  @Input() colorButton: 'primary' | 'success' | 'warn' = 'primary';
  @Input() typeButton: 'button' | 'submit' = 'button';

  constructor() { }

  get colors() {
    return {
      'bg-primary-700': this.colorButton === 'primary',
      'hover:bg-primary-800': this.colorButton === 'primary',
      'bg-success-700': this.colorButton === 'success',
      'hover:bg-success-800': this.colorButton === 'success',
      'bg-warn-700': this.colorButton === 'warn',
      'hover:bg-warn-800': this.colorButton === 'warn',
    }
  }
}
