/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Component, computed } from '@angular/core';
import { Model } from './repository.model';

import { Product } from './product.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  private model: Model = new Model();
 
  products = computed<Product[]>(() => this.model.Products());

  count = computed<number>(() => this.products().length);

  product(key: number): Product | undefined {
      return this.model.getProduct(key);
  }

  newProduct: Product = new Product();

  addProduct(p: Product) {
      this.model.saveProduct(p);
  }

  submitForm() {
      this.addProduct(this.newProduct);
  }  
}
