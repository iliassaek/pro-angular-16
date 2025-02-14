/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @angular-eslint/directive-selector */
import { Directive, Input,SimpleChange, KeyValueDiffer, 
    KeyValueDiffers } from "@angular/core";
import { DiscountService } from "./discount.service";
 
@Directive({
    selector: "td[pa-price]",
    exportAs: "discount"
})
export class PaDiscountAmountDirective {
    private differ?: KeyValueDiffer<any, any>;
 
    constructor(private keyValueDiffers: KeyValueDiffers,
        private discount: DiscountService) { }
 
    @Input({ alias: "pa-price", required: true})
    originalPrice!: number;
 
    discountAmount?: number;
 
    ngOnInit() {
        this.differ =
            this.keyValueDiffers.find(this.discount).create();
    }
 
    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        if (changes["originalPrice"] != null) {
            this.updateValue();
        }
    }
 
    ngDoCheck() {
        if (this.differ?.diff(this.discount) != null) {
            this.updateValue();
        }
    }
 
    private updateValue() {
        this.discountAmount 
            = this.discount.applyDiscount(this.originalPrice);
    }
}