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

  products = computed<Product[]>(() => this.model.Products());

  count = computed<number>(() => this.products().length);

  classes = computed<string>(() =>
    this.count() == 5 ? 'bg-success' : 'bg-warning'
  );

  getClasses(key: number) {
    return (
      'p-2 ' +
      ((this.products()[key].price ?? 0) > 50 ? 'bg-info' : 'bg-warning')
    );
  }

  getClassMap(key: number): Object {
    let product = this.products()[key];
    return {
        "text-center bg-danger": product.name == "Kayak",
        "bg-info": (product.price ?? 0) < 50
    };
}
}
