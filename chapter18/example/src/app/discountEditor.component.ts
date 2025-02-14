import { Component, Input } from "@angular/core";
import { DiscountService } from "./discount.service";
import { FormsModule } from "@angular/forms";
 
@Component({
    selector: "paDiscountEditor",
    template: `<div class="form-group">
                   <label>Discount</label>
                   <input [(ngModel)]="discounter.discount" 
                      class="form-control" type="number" />              
               </div>`,
    imports: [FormsModule]
})
export class PaDiscountEditorComponent {
 
    @Input({ alias: "discounter", required: true})
    discounter!: DiscountService;
}