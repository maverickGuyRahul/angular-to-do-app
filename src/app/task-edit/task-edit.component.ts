import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // Import FormsModule and CommonModule here
})
export class TaskEditComponent {
  task = {
    assignedTo: '',
    status: '',
    dueDate: '',
    priority: '',
    description: ''
  };

  saveTask() {
    // Logic to save edited task
  }

  cancel() {
    // Logic to cancel and close form
  }
}
