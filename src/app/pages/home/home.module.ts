import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatSidenavModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
