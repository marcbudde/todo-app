import { Component } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  done = false;

  switchState() {
    this.done = !this.done;
  }
}
