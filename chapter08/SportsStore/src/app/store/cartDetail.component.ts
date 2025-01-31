import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConnectionService } from '../model/connection.service';
import { ModelModule } from '../model/model.module';

@Component({
  selector: "cart-detail",
  imports: [CommonModule,RouterModule, ModelModule],
  templateUrl: 'cartDetail.component.html',
})
export class CartDetailComponent {
  constructor(public cart: Cart, 
    private connection: ConnectionService) {}

get connected() {
    return this.connection.connected;
}}
