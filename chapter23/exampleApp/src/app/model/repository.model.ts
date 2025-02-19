import { Injectable, Signal, signal } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class Model {
  private products = signal<Product[]>([]);
  private locator = (p: Product, id?: number) => p.id == id;

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getData()
    .subscribe(data => this.products.set(data));
  }

  get Products(): Signal<Product[]> {
    return this.products.asReadonly();
  }

  getProduct(id: number): Product | undefined {
    return this.products().find((p) => this.locator(p, id));
  }

  saveProduct(product: Product) {
    if (product.id == 0 || product.id == undefined) {
      product.id = this.generateID();
      // Return a new array with the new product appended.
      this.products.update((prods) => [...prods, product]);
    } else {
      // Return a new array with the product updated.
      this.products.update((prods) => {
        const index = prods.findIndex((p) => this.locator(p, product.id));
        if (index > -1) {
          return [...prods.slice(0, index), product, ...prods.slice(index + 1)];
        }
        return prods;
      });
    }
  }

  deleteProduct(id: number) {
    // Return a new array without the deleted product.
    this.products.update((prods) => {
      const index = prods.findIndex((p) => this.locator(p, id));
      if (index > -1) {
        return [...prods.slice(0, index), ...prods.slice(index + 1)];
      }
      return prods;
    });
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
