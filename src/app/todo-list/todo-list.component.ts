import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  constructor(private taskService: TaskService) {}

  getMyTasks() {
    return this.taskService.getTasks();
  }
}
