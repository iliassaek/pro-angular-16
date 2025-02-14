/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Component } from '@angular/core';
import { Model } from './repository.model';

import { Product } from './product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from '../productForm.component';
import { ProductTableComponent } from '../productTable.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr-FR');

@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    FormsModule,
    ProductFormComponent,
    ProductTableComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(public model: Model){}

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }
  
}
