/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, Signal } from '@angular/core';
import { Product } from './product/product.model';
import { Model } from './product/repository.model';
import { PaIteratorDirective } from './iterator.directive';

@Component({
  selector: 'paProductTable',
  templateUrl: 'productTable.component.html',
  imports: [
    PaIteratorDirective
  ]
})
export class ProductTableComponent {
  @Input({ alias: "model", required: true})
  dataModel!: Model;

  get Products(): Signal<Product[]> {
      return this.dataModel.Products;
  }

  getProduct(key: number): Product | undefined {
      return this.dataModel?.getProduct(key);
  }

  deleteProduct(key: number) {
      this.dataModel.deleteProduct(key);
  }
}
