import {
  Component,
  computed,
  effect,
  Input,
  Signal,
  ViewChild,
} from '@angular/core';
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { PlatformService } from '../plateform.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  standalone: false,
  selector: 'paTable',
  templateUrl: 'table.component.html',
})
export class TableComponent {
  DataSource: MatTableDataSource<Product>;

  @Input()
  category?: string;

  constructor(private model: Model, private ps: PlatformService) {
    this.DataSource = new MatTableDataSource<Product>();
    effect(() => {
      this.DataSource.data = this.model.Products();
    });
  }

  deleteProduct(key?: number) {
    if (key != undefined) {
      this.model.deleteProduct(key);
    }
  }

  get isServer() {
    return this.ps.isServer;
  }

  colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.DataSource.paginator = this.paginator;
    this.DataSource.sort = this.sort;
  }
}
