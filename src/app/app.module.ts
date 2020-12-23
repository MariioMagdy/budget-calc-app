import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdditemFormComponent } from './additem-form/additem-form.component';
import { BudgetComponent } from './budget/budget.component';
import { BudgetItemCardComponent } from './budget/budget-item-card/budget-item-card.component';
import{FormsModule}from "@angular/forms";
import { EditItemModelComponent } from './edit-item-model/edit-item-model.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AdditemFormComponent,
    BudgetComponent,
    BudgetItemCardComponent,
    EditItemModelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
