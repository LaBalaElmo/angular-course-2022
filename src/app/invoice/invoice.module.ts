import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Invoice1Component } from './invoice1/invoice1.component';
import { Invoice2Component } from './invoice2/invoice2.component';
import {RouterModule, Routes} from "@angular/router";
import {User1Component} from "../user/user1/user1.component";
import {User2Component} from "../user/user2/user2.component";

const routes: Routes = [
  {
    path: 'invoice1',
    component: Invoice1Component
  },
  {
    path: 'invoice2',
    component: Invoice2Component
  }
]

@NgModule({
  declarations: [
    Invoice1Component,
    Invoice2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InvoiceModule { }
