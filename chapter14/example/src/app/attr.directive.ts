/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/directive-selector */
import {  Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[pa-attr]',
})
export class PaAttrDirective {
  constructor(private element: ElementRef) {}

  @Input('pa-attr')
  bgClass: string | null = '';

  ngOnChanges(changes: SimpleChanges) {
    let change = changes['bgClass'];
    let classList = this.element.nativeElement.classList;
    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }
}
