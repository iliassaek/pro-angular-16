/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/directive-class-suffix */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Directive, Input, SimpleChanges, ContentChildren, QueryList } from '@angular/core';
import { PaCellColor } from './cellcolor.directive';


@Directive({
  selector: 'table',
})
export class PaCellColorSwitcher {
  @Input('paCellDarkColor')
  modelProperty: Boolean | undefined;

  @ContentChildren(PaCellColor, {descendants: true})    
  contentChildren: QueryList<PaCellColor> | undefined;

  ngOnChanges(changes: SimpleChanges) {
      this.updateContentChildren(changes["modelProperty"].currentValue);
  }

  private updateContentChildren(dark: Boolean) {
      if (this.contentChildren != null && dark != undefined) {
          this.contentChildren.forEach((child, index) => {
              if (dark) {
                  child.setColor(index % 2 ? dark : !dark);
              } else {
                  child.setColor(false);
              }
          });
      }
  }
}