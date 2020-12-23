import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { BedgetItem } from 'src/app/shared/models/budget-item/budget-item-model';


@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {
  
@Input() item:BedgetItem
@Output() xbutton: EventEmitter<any>= new EventEmitter<any>(); 
@Output()  CardClick: EventEmitter<any>= new EventEmitter<any>();  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.xbutton.emit();
  }
  
  onCardClick(){

    this.CardClick.emit()
  }
}
