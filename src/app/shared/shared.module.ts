import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertComponent} from "./alert/alert.component";
import {SidenavComponent} from "./sidenav/sidenav.component";



@NgModule({
  declarations: [
    AlertComponent,
    SidenavComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    SidenavComponent]
})
export class SharedModule { }
