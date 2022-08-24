import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {View1Component} from "./view1.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: View1Component
  }
]

@NgModule({
  declarations: [
    View1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class View1Module { }
