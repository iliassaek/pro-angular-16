/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Component, computed } from '@angular/core';
import { Model } from './repository.model';

import { Product } from './product.model';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { PaStructureDirective } from '../structure.directive';
import { PaIteratorDirective } from '../iterator.directive';
import { PaCellColor } from '../cellcolor.directive';
import { PaCellColorSwitcher } from '../cellColorSwitcher.directive';
import { ProductFormComponent } from "../productForm.component";
import { ProductTableComponent } from "../productTable.component";

@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    FormsModule,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductFormComponent,
    ProductTableComponent
],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  private model: Model = new Model();
  
  darkColor: boolean = false;

  showTable: boolean = false;

  products = computed<Product[]>(() => this.model.Products());

  count = computed<number>(() => this.products().length);

  product(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  newProduct: Product = new Product();

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  submitForm() {
    this.addProduct(this.newProduct);
  }
}
