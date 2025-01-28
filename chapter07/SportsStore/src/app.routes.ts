import { Routes } from '@angular/router';
import { CartDetailComponent } from './app/store/cartDetail.component';
import { CheckoutComponent } from './app/store/checkout.component';
import { StoreComponent } from './app/store/store.component';
import { StoreFirstGuard } from './app/storeFirst.guard';

export const routes: Routes = [
  { path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard] },
  {
    path: 'cart',
    component: CartDetailComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [StoreFirstGuard],
  },
  { path: '**', redirectTo: '/store' },
];
