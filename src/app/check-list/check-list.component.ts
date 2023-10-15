import { Component, Input } from '@angular/core';
import { FavoriteChangedEventArgs } from '../toggle/toggle.component';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent {
  @Input('taskList') taskList: TaskDefinition[] = [];
  @Input('toggleTaskFunction') toggleTaskFunction: (task: TaskDefinition, eventArgs: FavoriteChangedEventArgs) => void = (task, eventArgs) => {};
}

export interface TaskDefinition {
  name: string,
  completed: boolean;
}
