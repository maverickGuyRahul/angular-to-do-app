import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [CommonModule]  // Import CommonModule here
})
export class TaskListComponent {
  tasks = [
    { assignedTo: 'User 1', status: 'Not Started', dueDate: '2024-09-10', priority: 'High' , comments: 'Comments 1' },
    { assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-11', priority: 'Normal' , comments: 'Comments 2'   },
    { assignedTo: 'User 3', status: 'Completed', dueDate: '2024-09-12', priority: 'Low' , comments: 'Comments 3' },
    { assignedTo: 'User 4', status: 'Not Started', dueDate: '2024-09-13', priority: 'High' , comments: 'Comments 4' },
    { assignedTo: 'User 1', status: 'In Progress', dueDate: '2024-09-14', priority: 'Normal' , comments: 'Comments 5' }
  ];

  openNewTask() {
    // Logic to open new task form
  }

  editTask(task: any) {
    // Logic to open edit task form
  }

  deleteTask(task: any) {
    // Logic to delete task
  }
}
