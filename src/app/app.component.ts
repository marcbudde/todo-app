import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './toggle/toggle.component';
import { TaskService } from './task.service';
import { TaskDefinition } from './check-list/check-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awesome-app';
  toggleTaskFunction: (task: TaskDefinition, eventArgs: FavoriteChangedEventArgs) => void = (task, eventArgs) => {
    // eventArgs aktuell nicht benötigt
    this.taskService.changeStatus(task);
  };

  constructor(private taskService: TaskService) {}
    

  getMyTasks(): TaskDefinition[] {
    return this.taskService.getTasks();
  }
}
