import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product2Component } from './product2/product2.component';
import { Product1Component } from './product1/product1.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    Product2Component,
    Product1Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    Product2Component,
    Product1Component
  ]
})
export class ProductModule { }
