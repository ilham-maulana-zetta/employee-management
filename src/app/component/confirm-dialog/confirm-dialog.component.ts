import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
 
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})

export class ConfirmDialogComponent {
  
  title: string;
  message: string;
 
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
  ) {
    if (data) {
      this.title = data.title ?? 'Konfirmasi';
      this.message = data.message ?? 'Anda yakin?';
    } else {
      this.title = 'Konfirmasi';
      this.message = 'Anda yakin?';
    }
  }
  
  onConfirm(): void {
    this.dialogRef.close(true);
  }
 
  onDismiss(): void {
    this.dialogRef.close(false);
  }
}

export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}