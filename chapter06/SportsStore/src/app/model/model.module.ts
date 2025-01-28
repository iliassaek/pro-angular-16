import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { OrderRepository } from "./order.repository";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";

 
@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, StaticDataSource, OrderRepository, RestDataSource]
})
export class ModelModule { }