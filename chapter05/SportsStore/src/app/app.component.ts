import { Component } from '@angular/core';
import { ProductRepository } from './model/product.repository';
import { StaticDataSource } from './model/static.datasource';

@Component({
  selector: 'app',
  template: `<div class="bg-success p-2 text-center text-white">
                This is SportsStore
              </div>`,
  providers:[ProductRepository, StaticDataSource]
})
export class AppComponent {
  title = 'SportsStore';
}
