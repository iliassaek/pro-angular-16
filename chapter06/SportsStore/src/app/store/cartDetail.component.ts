import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';

@Component({
  selector: "cart-detail",
  imports: [CommonModule],
  templateUrl: 'cartDetail.component.html',
})
export class CartDetailComponent {
  constructor(public cart: Cart) {}
}
