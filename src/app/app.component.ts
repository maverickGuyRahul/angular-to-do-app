import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TaskListComponent]  // Import TaskListComponent here
})
export class AppComponent {
  title = 'todo-app';
}
