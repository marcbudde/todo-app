import { Component } from '@angular/core';

@Component({
  selector: 'create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  taskName = 'my@domain.com';
  isSaveActive = false;

  onKeyUp() {
    console.log('Task Name eingegeben: ' + this.taskName)
  }
}
