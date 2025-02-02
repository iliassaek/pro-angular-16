import { Component, computed } from '@angular/core';
import { Model } from './repository.model';

import { Product } from './product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  private model: Model = new Model();
 
  products = computed<Product[]>(() => this.model.Products());

  count = computed<number>(() => this.products().length);

  classes = computed<string>(() => 
      this.count() == 5 ? "bg-success" : "bg-warning");
}
