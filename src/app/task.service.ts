import { Injectable } from '@angular/core';
import { TaskDefinition } from './check-list/check-list.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: TaskDefinition[] = [
    { name: 'Garagentor reparieren', completed: false },
    { name: 'Obst einkaufen', completed: true }
  ];

  getTasks(): TaskDefinition[] {
    return this.tasks;
  }

  changeStatus(task: TaskDefinition) {
    task.completed = !task.completed;
    console.log('Zu speichernder Zustand:', task);
  }
}
