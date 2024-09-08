import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'; // For matInput
import { MatSelectModule } from '@angular/material/select'; // For mat-select
import { MatDatepickerModule } from '@angular/material/datepicker'; // For mat-datepicker
import { MatNativeDateModule } from '@angular/material/core'; // For datepicker
import { MatButtonModule } from '@angular/material/button'; // For mat-button
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; // For MatDialog
import { MAT_DATE_LOCALE } from '@angular/material/core'; // For date locale

@Component({
  selector: 'app-new-task-modal',
  templateUrl: './new-task-modal.component.html',
  styleUrls: ['./new-task-modal.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Include FormsModule here
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule, // Include MatNativeDateModule for datepicker
    MatButtonModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' } // Provide MAT_DATE_LOCALE
  ]
})
export class NewTaskModalComponent {
  task = {
    assignedTo: '',
    status: '',
    priority: '',
    dueDate: '',
    description: ''
  };

  constructor(
    public dialogRef: MatDialogRef<NewTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data && data.task) {
      this.task = { ...data.task }; // Load the task data for editing
    }
  }

  save() {
    this.dialogRef.close(this.task); // Close the dialog and return the task data
  }

  cancel() {
    this.dialogRef.close(); // Close the dialog without returning data
  }
}