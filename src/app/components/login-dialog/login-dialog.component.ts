import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  template: `
    <h1 mat-dialog-title>Login</h1>
    <mat-dialog-content>
      <!-- Add your login form here -->
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Login</button>
    </mat-dialog-actions>
  `,
  styles: [`
    /* Add your styles here */
  `]
})
export class LoginDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
