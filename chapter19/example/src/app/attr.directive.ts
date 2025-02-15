/* eslint-disable @angular-eslint/no-output-rename */
/* eslint-disable @angular-eslint/no-output-native */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/directive-selector */
import {  Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Product } from './product/product.model';

@Directive({
  selector: '[pa-attr]',
})
export class PaAttrDirective {
  @Input("pa-attr")
  @HostBinding("class")
  bgClass: string | null = "";

  @Input("pa-product")
  product: Product = new Product();

  @Output("pa-category")
  click = new EventEmitter<string>();

  @HostListener("click")
  triggerCustomEvent() {
      if (this.product != null) {
          this.click.emit(this.product.category);
      }
  }
}
