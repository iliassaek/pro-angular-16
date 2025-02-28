import { Component, HostListener } from '@angular/core';
import { Model } from './model/repository.model';
import { Product } from './model/product.model';

@Component({
  standalone: false,
  selector: 'simple',
  templateUrl: 'simple.component.html',
})
export class SimpleComponent {
  constructor(private repository: Model) {}

  category: string = 'Soccer';
  highlighted: boolean = false;

  getProducts(): Product[] {
    return this.repository
      .Products()
      .filter((p) => p.category == this.category);
  }

  @HostListener('mouseenter', ['$event.type'])
  @HostListener('mouseleave', ['$event.type'])
  setHighlight(type: string) {
    this.highlighted = type == 'mouseenter';
  }
}
