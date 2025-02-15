import { Injectable } from "@angular/core";

/* eslint-disable @typescript-eslint/no-inferrable-types */
@Injectable({
    providedIn: 'root'
})
export class DiscountService {
    private discountValue: number = 10;
 
    public get discount(): number {
        return this.discountValue;
    }
 
    public set discount(newValue: number) {
        this.discountValue = newValue ?? 0;
    }         
 
    public applyDiscount(price: number) {
        return Math.max(price - this.discountValue, 5);
    }
}