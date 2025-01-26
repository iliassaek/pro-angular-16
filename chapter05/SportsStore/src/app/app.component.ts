import { Component } from '@angular/core';
import { StoreComponent } from './store/store.component';

@Component({
  imports:[StoreComponent],
  selector: 'app',
  template: '<store></store>',
})
export class AppComponent {
  title = 'SportsStore';
}
