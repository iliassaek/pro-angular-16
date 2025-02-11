/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */
import { Component } from "@angular/core";
 
@Component({
    selector: "paProductForm",
    template: "<div>{{model}}</div>"
})
export class ProductFormComponent {

    model: string = "This is the model";
}