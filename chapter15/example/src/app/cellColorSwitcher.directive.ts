/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/directive-class-suffix */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Directive, Input, SimpleChanges, ContentChild } from '@angular/core';
import { PaCellColor } from './cellcolor.directive';

@Directive({
  selector: 'table',
})
export class PaCellColorSwitcher {
  @Input('paCellDarkColor')
  modelProperty: Boolean | undefined;

  @ContentChild(PaCellColor)
  contentChild: PaCellColor | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (this.contentChild != null) {
      this.contentChild.setColor(changes['modelProperty'].currentValue);
    }
  }
}