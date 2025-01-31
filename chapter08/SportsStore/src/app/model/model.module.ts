import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { OrderRepository } from "./order.repository";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";
import { ConnectionService } from "./connection.service";

 
@NgModule({
    providers: [ProductRepository, StaticDataSource, OrderRepository, ConnectionService]
})
export class ModelModule { }