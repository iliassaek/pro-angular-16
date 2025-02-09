/* eslint-disable @angular-eslint/no-output-rename */
/* eslint-disable @angular-eslint/no-output-native */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/directive-selector */
import {  Directive, ElementRef, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Product } from './product/product.model';

@Directive({
  selector: '[pa-attr]',
})
export class PaAttrDirective {
  
  constructor(private element: ElementRef) {
    this.element.nativeElement.addEventListener("click", () => {
        if (this.product != null) {
            this.click.emit(this.product.category);
        }
    });
}

  @Input('pa-attr')
  bgClass: string | null = '';

  @Input({ required: true, alias: 'fg-class' })
  fgClass: string | undefined;

  @Input("pa-product")
  product: Product = new Product();

  @Output("pa-category")
  click = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    ['bgClass', 'fgClass'].forEach((c) => {
      let change = changes[c];
      if (change) {
        let classList = this.element.nativeElement.classList;
        if (
          !change.isFirstChange() &&
          classList.contains(change.previousValue)
        ) {
          classList.remove(change.previousValue);
        }
        if (!classList.contains(change.currentValue)) {
          classList.add(change.currentValue);
        }
      }
    });
  }
}
