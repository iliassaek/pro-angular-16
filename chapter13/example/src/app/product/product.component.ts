/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Component, computed } from '@angular/core';
import { Model } from './repository.model';

import { Product } from './product.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  private model: Model = new Model();

  products = computed<Product[]>(() => this.model.Products());

  count = computed<number>(() => this.products().length);

  product(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  // selectedProduct = signal<string | undefined>(undefined);

  // get selectedProductProp() { return this.selectedProduct(); }
  // set selectedProductProp(val) { this.selectedProduct.set(val)};

  // getSelected(product: Product): boolean {
  //     return product.name == this.selectedProduct();
  // }

  // handleInputEvent(ev: Event) {
  //     if (ev.target instanceof HTMLInputElement) {
  //         this.selectedProduct.set(ev.target.value);
  //     }
  // }

  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log('New Product: ' + this.jsonProduct);
  }

  getMessages(errs: ValidationErrors | null, name: string): string[] {
    let messages: string[] = [];
    for (let errorName in errs) {
      switch (errorName) {
        case 'required':
          messages.push(`You must enter a ${name}`);
          break;
        case 'minlength':
          messages.push(`A ${name} must be at least
                    ${errs['minlength'].requiredLength}
                    characters`);
          break;
        case 'pattern':
          messages.push(`The ${name} contains
                     illegal characters`);
          break;
      }
    }
    return messages;
  }

  getValidationMessages(state: NgModel, thingName?: string) {
    let thing: string = state.path?.[0] ?? thingName;
    return this.getMessages(state.errors, thing);
  }


  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
      this.formSubmitted = true;
      if (form.valid) {
          this.addProduct(this.newProduct);
          this.newProduct = new Product();
          form.resetForm();
          this.formSubmitted = false;
      }
  }  
}
