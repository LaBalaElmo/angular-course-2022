import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'view1',
        loadChildren: () => import('./view1/view1.module').then( m => m.View1Module)
      },
      {
        path: 'view2',
        loadChildren: () => import('./view2/view2.module').then( m => m.View2Module)
      }
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
