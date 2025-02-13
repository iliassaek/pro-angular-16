/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectorRef, Component, Input, Signal } from '@angular/core';
import { Product } from './product/product.model';
import { Model } from './product/repository.model';
import { PaIteratorDirective } from './iterator.directive';
import { CommonModule } from '@angular/common';
import { PaAddTaxPipe } from './addTax.pipe';
//import { PaCellColor } from './cellColor.directive';

@Component({
  selector: 'paProductTable',
  templateUrl: 'productTable.component.html',
  imports: [
    PaIteratorDirective,
    CommonModule,
    PaAddTaxPipe
  ]
})
export class ProductTableComponent {
  @Input({ alias: "model", required: true})
  dataModel!: Model;

  constructor(private changeRef: ChangeDetectorRef) {}
  
  get Products(): Signal<Product[]> {
      return this.dataModel.Products;
  }

  getProduct(key: number): Product | undefined {
      return this.dataModel?.getProduct(key);
  }

  deleteProduct(key: number) {
      this.dataModel.deleteProduct(key);
  }

  taxRate: number = 0;
  categoryFilter: string | undefined;
  itemCount: number = 3;
}
