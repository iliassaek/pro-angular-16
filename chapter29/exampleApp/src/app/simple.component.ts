import { Component, EventEmitter, HostListener, Output } from '@angular/core';
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

  @Output('pa-highlight')
  change = new EventEmitter<boolean>();

  getProducts(): Product[] {
    return this.repository
      .Products()
      .filter((p) => p.category == this.category);
  }

  @HostListener('mouseenter', ['$event.type'])
  @HostListener('mouseleave', ['$event.type'])
  setHighlight(type: string) {
    this.highlighted = type == 'mouseenter';
    this.change.emit(this.highlighted);
  }
}
