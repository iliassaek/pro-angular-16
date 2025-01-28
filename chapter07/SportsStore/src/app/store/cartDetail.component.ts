import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: "cart-detail",
  imports: [CommonModule,RouterModule],
  templateUrl: 'cartDetail.component.html',
})
export class CartDetailComponent {
  constructor(public cart: Cart) {}
}
