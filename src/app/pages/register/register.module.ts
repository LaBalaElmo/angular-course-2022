import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {RegisterComponent} from "./register.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Route[] = [
  {
    path: '',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
