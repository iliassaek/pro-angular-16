/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Component, computed } from '@angular/core';
import { Model } from './repository.model';

import { Product } from './product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  // selectedProduct = signal<string | undefined>(undefined);

  // get selectedProductProp() { return this.selectedProduct(); }
  // set selectedProductProp(val) { this.selectedProduct.set(val)};

  // getSelected(product: Product): boolean {
  //     return product.name == this.selectedProduct();
  // }

  // handleInputEvent(ev: Event) {
  //     if (ev.target instanceof HTMLInputElement) {
  //         this.selectedProduct.set(ev.target.value);
  //     }
  // }

  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log('New Product: ' + this.jsonProduct);
  }
}
