import { Component, Inject, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BedgetItem } from '../shared/models/budget-item/budget-item-model';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA,) public item:BedgetItem) { }

  ngOnInit(): void {
  }

  onSubmit(updatedItem:BedgetItem){
    this.dialogRef.close(updatedItem)
  }
}
