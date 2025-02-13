/* eslint-disable @angular-eslint/use-pipe-transform-interface */
import { Pipe } from "@angular/core";
import { Product } from "./product.model";
 
@Pipe({
    name: "filter",
    pure: true
})
export class PaCategoryFilterPipe {
 
    transform(products: Product[] | undefined, 
          category: string | undefined): Product[] {
        if (products == undefined) {
            return [];
        }
        return category == undefined ?
            products : products.filter(p => p.category == category);
    }
}