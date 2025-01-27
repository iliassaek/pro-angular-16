import { Routes } from '@angular/router';
import { CartDetailComponent } from './app/store/cartDetail.component';
import { CheckoutComponent } from './app/store/checkout.component';
import { StoreComponent } from './app/store/store.component';

export const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: '/store' },
];
