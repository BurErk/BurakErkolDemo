import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // Add any initialization logic here
  }

  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent);
  }
}