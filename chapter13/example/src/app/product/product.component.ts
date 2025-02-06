/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Component, computed, signal } from "@angular/core";
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

  products = computed<Product[]>(() => this.model.Products());

  count = computed<number>(() => this.products().length);

  product(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  selectedProduct = signal<string | undefined>(undefined);

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct();
  }
}
