import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '@angular/router';

import { BedgetItem } from '../shared/models/budget-item/budget-item-model';

@Component({
  selector: 'app-additem-form',
  templateUrl: './additem-form.component.html',
  styleUrls: ['./additem-form.component.scss']
})
export class AdditemFormComponent implements OnInit {
@Input() item:BedgetItem
@Output() formSubmit:EventEmitter<BedgetItem>= new EventEmitter<BedgetItem>();

isNewItem:boolean
  constructor() { }

  ngOnInit(): void {
    if(this.item){
      this.isNewItem =false;
    }else{
      this.isNewItem=true
      this.item= new BedgetItem("",null)
    }
  }

  onSubmit(formValue:NgForm){
    this.formSubmit.emit(formValue.value)
    console.log(formValue)
    formValue.reset();
  }

}
