import { Component } from '@angular/core';
import { Model } from './model/repository.model';
import { Product } from './model/product.model';

@Component({
  standalone: false,
  selector: 'simple',
  template: `<div class="bg-primary text-white p-1">
    There are
    <span class="strong"> {{ getProducts().length }} </span>
    products
  </div>`,
})
export class SimpleComponent {
  constructor(private repository: Model) {}

  category: string = 'Soccer';

  getProducts(): Product[] {
    return this.repository
      .Products()
      .filter((p) => p.category == this.category);
  }
}
