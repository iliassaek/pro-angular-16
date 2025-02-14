import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { SimpleDataSource } from './datasource.model';
import { Product } from './product.model';

@Injectable({
  providedIn:'root'
})
export class Model {
  private products: WritableSignal<Product[]>;
  private locator = (p: Product, id: number | any) => p.id == id;

  constructor(private dataSource: SimpleDataSource) {
    this.products = signal(new Array<Product>());
    this.products.update((prods) => [...prods, ...this.dataSource.getData()]);
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
      this.products.update((prods) => [...prods, product]);
    } else {
      this.products.update((prods) =>
        prods.map((p) => (this.locator(p, product.id) ? product : p))
      );
    }
  }

  deleteProduct(id: number) {
    this.products.update((prods) => prods.filter((p) => !this.locator(p, id)));
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
