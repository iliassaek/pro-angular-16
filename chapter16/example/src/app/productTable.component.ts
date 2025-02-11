/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectorRef, Component, Input, QueryList, Signal, ViewChildren } from '@angular/core';
import { Product } from './product/product.model';
import { Model } from './product/repository.model';
import { PaIteratorDirective } from './iterator.directive';
import { PaCellColor } from './cellColor.directive';

@Component({
  selector: 'paProductTable',
  templateUrl: 'productTable.component.html',
  imports: [
    PaIteratorDirective,
    PaCellColor
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

  @ViewChildren(PaCellColor)
  viewChildren: QueryList<PaCellColor> | undefined;
 
  ngAfterViewInit() {
      this.viewChildren?.changes.subscribe(() => {
          this.updateViewChildren();
      });
      this.updateViewChildren();
  }

  private updateViewChildren() {
      this.viewChildren?.forEach((child, index) => {
          child.setColor(index % 2 ? true : false);
      });
      this.changeRef.detectChanges();        
  }
}
