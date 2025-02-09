/* eslint-disable @angular-eslint/no-output-rename */
/* eslint-disable @angular-eslint/no-output-native */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/directive-selector */
import {  Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, SimpleChanges } from '@angular/core';
import { Product } from './product/product.model';

@Directive({
  selector: '[pa-attr]',
})
export class PaAttrDirective {
  constructor(private element: ElementRef) {}

  @Input('pa-attr')
  @HostBinding('class')
  bgClass: string | null = '';

  @Input({ required: true, alias: 'fg-class' })
  fgClass: string | undefined;

  @Input('pa-product')
  product: Product = new Product();

  @Output('pa-category')
  click = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    let change = changes['fgClass'];
    if (change) {
      let classList = this.element.nativeElement.classList;
      if (!change.isFirstChange() && classList.contains(change.previousValue)) {
        classList.remove(change.previousValue);
      }
      if (!classList.contains(change.currentValue)) {
        classList.add(change.currentValue);
      }
    }
  }

  @HostListener('click')
  triggerCustomEvent() {
    if (this.product != null) {
      this.click.emit(this.product.category);
    }
  }
}
