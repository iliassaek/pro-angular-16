import { Component, IterableDiffer, IterableDiffers } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';
import { MaterialFeatures } from './material.module';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';

@Component({
  imports: [MaterialFeatures, FormsModule, ModelModule],
  templateUrl: 'orderTable.component.html',
})
export class OrderTableComponent {
  colsAndRows: string[] = ['name', 'zip', 'cart_p', 'cart_q', 'buttons'];

  dataSource: MatTableDataSource<Order>;
  differ: IterableDiffer<Order>;

  constructor(private repository: OrderRepository, differs: IterableDiffers) {
    this.dataSource = new MatTableDataSource<Order>(this.repository.orders());
    this.differ = differs.find(this.repository.orders()).create();
    this.dataSource.filter = 'true';
    this.dataSource.filterPredicate = (order, include) => {
      return !order.shipped || include.toString() == 'true';
    };
  }

  get includeShipped(): boolean {
    return this.dataSource.filter == 'true';
  }

  set includeShipped(include: boolean) {
    this.dataSource.filter = include.toString();
  }

  toggleShipped(order: Order) {
    order.shipped = !order.shipped;
    this.repository.updateOrder(order);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }

  ngDoCheck() {
    let changes = this.differ?.diff(this.repository.orders());
    if (changes != null) {
      this.dataSource.data = this.repository.orders();
    }
  }
}
