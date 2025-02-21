import { Component, Signal } from '@angular/core';
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { MODES, SharedState } from './sharedState.service';

@Component({
  standalone: false,
  selector: 'paTable',
  templateUrl: 'table.component.html',
})
export class TableComponent {
  constructor(private model: Model) {}

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  get Products(): Signal<Product[]> {
    return this.model.Products;
  }

  deleteProduct(key?: number) {
    if (key != undefined) {
      this.model.deleteProduct(key);
    }
  }
}
