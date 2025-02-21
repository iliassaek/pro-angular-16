import { Injectable, Signal, signal } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class Model {
  private products = signal<Product[]>([]);
  private locator = (p: Product, id?: number) => p.id == id;

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getData().subscribe((data) => this.products.set(data));
  }

  get Products(): Signal<Product[]> {
    return this.products.asReadonly();
  }

  getProduct(id: number): Product | undefined {
    return this.products().find((p) => this.locator(p, id));
  }

  saveProduct(product: Product) {
    if (product.id == 0 || product.id == undefined) {
      this.dataSource
        .saveProduct(product)
        .subscribe((p) => this.products.update((prods) => [...prods, product]));
    } else {
      this.dataSource.updateProduct(product).subscribe(() => {
        this.products.update((prods) => {
          const index = prods.findIndex((p) => this.locator(p, product.id));
          if (index !== -1) {
            const updatedProducts = [...prods];
            updatedProducts.splice(index, 1, product);
            return updatedProducts;
          }
          return prods;
        });
      });
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(() => {
      this.products.update((prods) => {
        const index = prods.findIndex((p) => this.locator(p, id));
        if (index > -1) {
          const updatedProducts = [...prods];
          updatedProducts.splice(index, 1);
          return updatedProducts;
        }
        return prods;
      });
    });
  }
}
