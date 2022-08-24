import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {View1Component} from "./view1/view1.component";
import {View2Component} from "./view2/view2.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'view1',
        component: View1Component
      },
      {
        path: 'view2',
        component: View2Component
      }
    ]
  }
]

@NgModule({
  declarations: [
    View1Component,
    View2Component,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
