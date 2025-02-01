import { Component, computed, signal } from '@angular/core';
import { Model } from './repository.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  private model: Model = new Model();
  private messages = ['Total', 'Price'];
  private index = signal<number>(0);

  get count(): number {
    let result = this.model.getProducts().length;
    // let total = 0;
    // for (let i = 0; i < 1000000000; i++) {
    //     total += 1;
    // }
    console.log(`count value read: ${result}`);
    return result;
  }

  get total(): string {
    let result = this.model
      .getProducts()
      .reduce((total, p) => total + (p.price ?? 0), 0)
      .toFixed(2);
    console.log(`total value read: ${result}`);
    return result;
  }

  // get message(): string {
  //     let result = `${this.messages[this.index()]} $${this.total}`;
  //     console.log(`message value read: ${result}`);
  //     return result;
  // }

  message = computed<string>(() => {
    let result = `${this.messages[this.index()]} $${this.total}`;
    console.log(`message value read: ${result}`);
    return result;
  });

  toggleMessage() {
    console.clear();
    console.log('toggleMessage method invoked');
    //this.index = (this.index + 1) % 2;
    this.index.update((currentVal) => (currentVal + 1) % 2);
  }

  removeProduct() {
    console.clear();
    console.log('removeProduct method invoked');
    this.model.deleteProduct(this.model.getProducts()[0].id ?? 0);
  }
}
