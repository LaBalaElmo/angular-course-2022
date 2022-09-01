import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: 'hom1',
    component: Home1Component
  },
  {
    path: 'hom2',
    component: Home2Component
  },
  {
    path: 'dash',
    loadChildren: () => import('./../dash/dash.module').then(m => m.DashModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./../user/user.module').then(m => m.UserModule)
  }
]

@NgModule({
  declarations: [
    Home1Component,
    Home2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class HomeModule { }
