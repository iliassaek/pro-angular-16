import { Injectable, effect } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Model } from './repository.model';
import { Product } from './product.model';

@Injectable()
export class ModelResolver {
  private promise: Promise<Product[]>;

  constructor(private model: Model) {
    this.promise = new Promise((resolve) => {
      effect(() => {
        if (this.model.Products().length > 0) {
          resolve(this.model.Products());
        }
      });
    });
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.promise;
  }
}
