import { computed, Injectable, Signal, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";

import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ProductRepository {
  products = signal<Product[]>([]);
  categories: Signal<string[]>;

  constructor(private dataSource: RestDataSource) {
    this.dataSource.products.subscribe(data => {
      this.products.set(data);
    });

    this.categories = computed(() => {
      return this.products()
        .map(p => p.category ?? "(None)")
        .filter((c, index, array) => array.indexOf(c) === index)
        .sort();
    });
  }

  getProduct(id: number): Product | undefined {
    return this.products().find(p => p.id === id);
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id === 0) {
      this.dataSource.saveProduct(product).subscribe(p => {
        // Use 'update' instead of 'mutate'
        this.products.update(list => {
          list.push(p);       // Imperatively mutate the array
          return list;        // Return the updated array
        });
      });
    } else {
      this.dataSource.updateProduct(product).subscribe(() => {
        this.products.update(list => {
          const idx = list.findIndex(existing => existing.id === product.id);
          if (idx !== -1) {
            list.splice(idx, 1, product);
          }
          return list;
        });
      });
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(() => {
      this.products.update(list => {
        const idx = list.findIndex(p => p.id === id);
        if (idx !== -1) {
          list.splice(idx, 1);
        }
        return list;
      });
    });
  }
}
