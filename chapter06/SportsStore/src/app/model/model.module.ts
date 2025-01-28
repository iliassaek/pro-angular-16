import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { OrderRepository } from "./order.repository";

 
@NgModule({
    providers: [ProductRepository, StaticDataSource, OrderRepository]
})
export class ModelModule { }