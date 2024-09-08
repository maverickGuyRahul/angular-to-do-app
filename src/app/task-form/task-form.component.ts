import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // Import FormsModule and CommonModule here
})
export class TaskFormComponent {
  task = {
    assignedTo: '',
    status: '',
    dueDate: '',
    priority: '',
    description: ''
  };

  saveTask() {
    // Logic to save task
  }

  cancel() {
    // Logic to cancel and close form
  }
}
