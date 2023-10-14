import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTasks() {
    return ['waschen', 'einkaufen'];
  }
}
