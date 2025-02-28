import {
  Component,
  Input,
} from '@angular/core';
import { Model } from './model/repository.model';
import { Product } from './model/product.model';

@Component({
  standalone: false,
  selector: 'simple',
  templateUrl: 'simple.component.html',
})
export class SimpleComponent {
  category: string = 'Soccer';
  highlighted: boolean = false;

  getProducts(): Product[] {
    return this.model == undefined
      ? []
      : this.model.Products().filter((p) => p.category == this.category);
  }

  @Input('pa-model')
  model?: Model;
}
