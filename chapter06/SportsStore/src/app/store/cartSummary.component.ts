import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
 
@Component({
    imports: [CommonModule, RouterModule],
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent {
 
    constructor(public cart: Cart) { }
}