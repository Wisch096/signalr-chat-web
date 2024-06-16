import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-name-dialog',
  templateUrl: './name-dialog.component.html',
  styleUrls: ['./name-dialog.component.css']
})
export class NameDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public name: string,
    public dialogRef: MatDialogRef<NameDialogComponent>
  ) {}

}
