import { Component, OnInit } from '@angular/core';
import { BedgetItem } from '../shared/models/budget-item/budget-item-model';
import {UpdateAmount} from "../budget/update-amount"

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
totalBudget:number=0
  constructor() { }

  budgetItems:BedgetItem[] =new Array<BedgetItem>();

  ngOnInit(): void {
  }

  additem(newItem:BedgetItem){

    this.budgetItems.push(newItem)
    this.totalBudget += newItem.amount
  }

  deleteItem(item:BedgetItem){
    let index= this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.totalBudget -= item.amount
  }
  updateItem(updateEvent:UpdateAmount){
            this.budgetItems[this.budgetItems.indexOf(updateEvent.old)]=updateEvent.new;

            //update the total budget
            this.totalBudget -=updateEvent.old.amount;
            this.totalBudget +=updateEvent.new.amount

  }
}
