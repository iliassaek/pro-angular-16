import { Component } from "@angular/core";
import { Router, ActivatedRoute, RouterModule } from "@angular/router";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { CommonModule } from "@angular/common";
import { MaterialFeatures } from "./material.module";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";

@Component({
    imports:[CommonModule, MaterialFeatures, FormsModule, ModelModule, RouterModule],
    templateUrl: "productEditor.component.html"
})
export class ProductEditorComponent { 
    editing: boolean = false;
    product: Product = new Product();

    constructor(private repository: ProductRepository,
                private router: Router,
                activeRoute: ActivatedRoute) {

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product,
                repository.getProduct(activeRoute.snapshot.params["id"]));
        }
    }

    save() {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }
}