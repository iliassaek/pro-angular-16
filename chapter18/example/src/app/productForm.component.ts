/* eslint-disable @angular-eslint/no-output-rename */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */
import { Component} from "@angular/core";
import { Product } from "./product/product.model";
import { FormsModule } from "@angular/forms";
import { Model } from "./product/repository.model";
 
@Component({
    selector: "paProductForm",
    templateUrl: "productForm.component.html",
    imports:[
        FormsModule
    ],
})
export class ProductFormComponent {
    newProduct: Product = new Product();
    constructor(private model: Model) {}

    submitForm(form: any) {
        this.model.saveProduct(this.newProduct);        
        this.newProduct = new Product();
        form.resetForm();
    }
}