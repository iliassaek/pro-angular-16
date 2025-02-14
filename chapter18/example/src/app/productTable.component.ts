/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, Signal } from '@angular/core';
import { Product } from './product/product.model';
import { Model } from './product/repository.model';
import { PaIteratorDirective } from './iterator.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from './discount.service';

@Component({
  selector: 'paProductTable',
  templateUrl: 'productTable.component.html',
  imports: [
    PaIteratorDirective,
    CommonModule,
    FormsModule,
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent
],
})
export class ProductTableComponent {
  discounter: DiscountService = new DiscountService();
  
  @Input({ alias: 'model', required: true })
  dataModel!: Model;

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
