/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/no-output-rename */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/directive-class-suffix */
import {
  Input,
  Output,
  EventEmitter,
  Directive,
  HostBinding,
  HostListener,
  SimpleChange,
} from '@angular/core';

@Directive({
  selector: 'input[paModel]',
  exportAs: "paModel"
})
export class PaModel {
  direction: string = "None";

  @Input('paModel')
  modelProperty: string | undefined = '';

  @HostBinding('value')
  fieldValue: string = '';

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes['modelProperty'];
    if (change.currentValue != this.fieldValue) {
      this.fieldValue = changes['modelProperty'].currentValue || '';
      this.direction = "Model";
    }
  }

  @Output('paModelChange')
  update = new EventEmitter<string>();

  @HostListener('input', ['$event.target.value'])
  updateValue(newValue: string) {
    this.fieldValue = newValue;
    this.update.emit(newValue);
    this.direction = "Element";
  }
}
