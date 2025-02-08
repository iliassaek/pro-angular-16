/* eslint-disable @angular-eslint/directive-selector */
import {  Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[pa-attr]',
})
export class PaAttrDirective {
  constructor(private element: ElementRef) {}

  @Input('pa-attr')
  bgClass: string | null = '';

  ngOnInit() {
    this.element.nativeElement.classList.add(
      this.bgClass || 'table-success',
      'fw-bold'
    );
  }
}
