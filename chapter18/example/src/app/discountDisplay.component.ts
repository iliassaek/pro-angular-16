/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from "@angular/core";
import { DiscountService } from "./discount.service";

@Component({
    selector: "paDiscountDisplay",
    template: `<div class="bg-info text-white p-2 my-2">
                  The discount is {{discounter.discount }}
               </div>`
})
export class PaDiscountDisplayComponent {
 
    @Input({alias: "discounter", required: true})
    discounter!: DiscountService;
}