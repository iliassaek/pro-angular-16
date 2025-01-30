import { Injectable, Signal, WritableSignal, computed, signal } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class OrderRepository {
    private ordersSignal: WritableSignal<Order[]> = signal([]);
    private loaded = signal(false); // Convert to signal for better reactivity

    constructor(private dataSource: RestDataSource) {}

    loadOrders() {
        this.loaded.set(true);
        this.dataSource.getOrders().subscribe(data => {
            this.ordersSignal.set(data);
        });
    }

    get orders(): Signal<Order[]> {
        if (!this.loaded()) {
            this.loadOrders();
        }
        return this.ordersSignal.asReadonly();
    }

    saveOrder(order: Order): Observable<Order> {
        this.loaded.set(false); // Trigger reload on next access
        return this.dataSource.saveOrder(order);
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order).subscribe(updatedOrder => {
            // Immutable update using map
            this.ordersSignal.update(orders => 
                orders.map(o => o.id === updatedOrder.id ? updatedOrder : o)
            );
        });
    }

    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(() => {
            // Immutable update using filter
            this.ordersSignal.update(orders => 
                orders.filter(o => o.id !== id)
            );
        });
    }
}