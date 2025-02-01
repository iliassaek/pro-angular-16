import { Component } from '@angular/core';
import { Model } from './repository.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  private model: Model = new Model();

  get count() : number {
    return this.model.getProducts().length;
  }
}
