import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'admin1',
        component: Admin1Component
      },
      {
        path: 'admin2',
        component: Admin2Component
      }
    ]
  },
  {
    path: 'subAdmin',
    component: SubAdminComponent
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    Admin1Component,
    Admin2Component,
    SubAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
