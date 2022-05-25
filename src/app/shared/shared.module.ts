import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ProductTitleComponent } from './product-title/product-title.component';

const COMPONENTS = [
  ButtonComponent,
  ProductTitleComponent
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
