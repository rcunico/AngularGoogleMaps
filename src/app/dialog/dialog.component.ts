import {MatDialog, MatDialogRef} from '@angular/material';
import { Component } from '@angular/core';

@Component({
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})

export class DialogComponent {
    constructor(public dialogRef: MatDialogRef<DialogComponent>) {
        
    }
}