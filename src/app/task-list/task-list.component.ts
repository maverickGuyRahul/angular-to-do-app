import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { NewTaskModalComponent } from '../new-task-modal/new-task-modal.component'; // Import your NewTaskModalComponent
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'; // Import your ConfirmDialogComponent

import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatDialogModule]
})
export class TaskListComponent {
  tasks = [
    { assignedTo: 'User 1', status: 'Not Started', dueDate: '2024-09-10', priority: 'High', comments: 'Comments 1' },
    { assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-11', priority: 'Normal', comments: 'Comments 2' },
    { assignedTo: 'User 3', status: 'Completed', dueDate: '2024-09-12', priority: 'Low', comments: 'Comments 3' },
    { assignedTo: 'User 4', status: 'Not Started', dueDate: '2024-09-13', priority: 'High', comments: 'Comments 4' },
    { assignedTo: 'User 1', status: 'In Progress', dueDate: '2024-09-14', priority: 'Normal', comments: 'Comments 5' }
  ];

  constructor(public dialog: MatDialog) {} // Add MatDialog to the constructor

  openNewTask() {
    const dialogRef = this.dialog.open(NewTaskModalComponent, {
      width: '500px',
      data: { task: {} } // Pass empty task for new task creation
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.comments = result.description;  // Map description to comments
        this.tasks.push(result); // Assuming result contains the new task data
      }
    });
  }

  editTask(task: any) {
    const dialogRef = this.dialog.open(NewTaskModalComponent, {
      width: '500px',
      data: { task: task } // Pass the task data for editing
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.comments = result.description;  // Map description to comments
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
          this.tasks[index] = result; // Update the task in the list
        }
      }
    });
  }

  deleteTask(task: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasks = this.tasks.filter(t => t !== task);
      }
    });
  }
}