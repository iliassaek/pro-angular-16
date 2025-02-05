/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Component, computed } from '@angular/core';
import { Model } from './repository.model';

import { Product } from './product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  private model: Model = new Model();

  targetName: string = 'Kayak';

  products = computed<Product[]>(() => this.model.Products());

  count = computed<number>(() => this.products().length);

  product(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  removeProduct() {
    this.model.deleteProduct(this.model.Products()[0].id ?? 0);
  }

  swapProduct() {
    let p = this.products()[0];
    if (p != null && p.id != null) {
      this.model.deleteProduct(p.id);
      this.model.saveProduct({ ...p, id: 0 });
    }
  }
  getKey(index: number, product: Product) {
    return product.name;
  }
}
