import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';
import { BedgetItem } from '../shared/models/budget-item/budget-item-model';
import {UpdateAmount} from "../budget/update-amount"

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})

  // interface updateEvent{
  //   old:BedgetItem
  //   new:BedgetItem
  // }
export class BudgetComponent implements OnInit {

  @Input() budgetItems:BedgetItem[];
  @Output() DeleteItem: EventEmitter<BedgetItem> =new EventEmitter<BedgetItem>();
  @Output() update: EventEmitter<UpdateAmount> =new EventEmitter<UpdateAmount>();
  
  constructor(public dialog:MatDialog) {
    
   }

  ngOnInit(): void {
    
  }

  delete(item:BedgetItem){
this.DeleteItem.emit(item);
  }

  onCardClicked(item:BedgetItem){
    const dialogRef = this.dialog.open(EditItemModelComponent,{
      width:"580px",
      data:item
    })
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        // this.budgetItems[this.budgetItems.indexOf(item)]=result
        this.update.emit({
          old:item,
          new:result
        })
      }
    })
  }

}
