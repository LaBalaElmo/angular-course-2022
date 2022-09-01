import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ad1Component } from './ad1/ad1.component';
import { Ad2Component } from './ad2/ad2.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'ad1',
    component: Ad1Component
  },
  {
    path: 'ad2',
    component: Ad2Component
  }
]

@NgModule({
  declarations: [
    Ad1Component,
    Ad2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
