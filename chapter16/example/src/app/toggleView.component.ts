/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'paToggleView',
  templateUrl: 'toggleView.component.html',
  imports: [FormsModule, CommonModule],
})
export class PaToggleView {
  showContent: boolean = true;
}
