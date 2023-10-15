import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Input('isToggleOn') toggleOn = false;
  @Input('toggleOnClass') toggleOnClass = '';
  @Input('toggleOffClass') toggleOffClass = '';
  @Output('change') change = new EventEmitter();

  switchState() {
    this.toggleOn = !this.toggleOn;
    this.change.emit({ newValue: this.toggleOn }); 
  }

  getToggleStateClass() {
    return this.toggleOn ? this.toggleOnClass : this.toggleOffClass;
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}