import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  taskName = '';
  isSaveActive = false;

  constructor(private taskService: TaskService) {}

  onKeyUp() {
    console.log('Task Name eingegeben: ' + this.taskName)
  }

  addTask() {
    this.taskService.addTask(this.taskName);
  }
}
