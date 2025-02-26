import { Component, computed, Input, Signal } from '@angular/core';
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { PlatformService } from '../plateform.service';

@Component({
  standalone: false,
  selector: 'paTable',
  templateUrl: 'table.component.html',
})
export class TableComponent {

  @Input()
  category?: string;

  constructor(private model: Model, private ps: PlatformService) {}

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  get Products(): Signal<Product[]> {
    return computed(() => {
      return this.model
        .Products()
        .filter((p) => this.category == null || p.category == this.category);
    });
  }

  get Categories(): Signal<string[]> {
    return computed(() => {
      return this.model
        .Products()
        .map((p) => p.category)
        .filter(
          (c, index, arr) => c != undefined && arr.indexOf(c) == index
        ) as string[];
    });
  }

  deleteProduct(key?: number) {
    if (key != undefined) {
      this.model.deleteProduct(key);
    }
  }

  get isServer() { return this.ps.isServer }

  colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];
}
