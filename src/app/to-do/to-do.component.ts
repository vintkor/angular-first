import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  tasks: any[] = [];

  addTask(event: Event) {
    if (((<HTMLInputElement>event.target).value).length > 3) {
      this.tasks.push({
        message: (<HTMLInputElement>event.target).value
      });
      (<HTMLInputElement>event.target).value = '';
    }
  }

  deleteTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}
