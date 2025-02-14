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
import { PaCategoryFilterPipe } from './product/categoryFilter.pipe';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
//import { PaCellColor } from './cellColor.directive';

@Component({
  selector: 'paProductTable',
  templateUrl: 'productTable.component.html',
  imports: [
    PaIteratorDirective,
    CommonModule,
    PaAddTaxPipe,
    PaCategoryFilterPipe,
    FormsModule,
  ],
})
export class ProductTableComponent {
  @Input({ alias: 'model', required: true })
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

  selectMap = {
    Watersports: 'stay dry',
    Soccer: 'score goals',
    other: 'have fun',
  };

  numberMap = {
    '=1': 'one product',
    '=2': 'two products',
    other: '# products',
  };

  numbers = interval(1000);
}
