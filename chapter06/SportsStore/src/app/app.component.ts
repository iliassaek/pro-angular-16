import { Component } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  imports:[RouterOutlet],
  selector: 'app',
  template: `
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'SportsStore';
}
