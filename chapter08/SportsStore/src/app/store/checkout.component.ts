import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule, ModelModule, RouterModule],
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css'],
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public repository: OrderRepository, public order: Order) {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
