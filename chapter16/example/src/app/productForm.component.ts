/* eslint-disable @angular-eslint/no-output-rename */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Output } from "@angular/core";
import { Product } from "./product/product.model";
import { FormsModule } from "@angular/forms";
 
@Component({
    selector: "paProductForm",
    templateUrl: "productForm.component.html",
    imports:[
        FormsModule
    ],
    styleUrls: ["productForm.component.css"]
})
export class ProductFormComponent {
    newProduct: Product = new Product();

    @Output("paNewProduct")
    newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.newProductEvent.emit(this.newProduct);
        this.newProduct = new Product();
        form.resetForm();
    }
}