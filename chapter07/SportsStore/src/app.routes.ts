import { Routes } from '@angular/router';
import { CartDetailComponent } from './app/store/cartDetail.component';
import { CheckoutComponent } from './app/store/checkout.component';
import { StoreComponent } from './app/store/store.component';
import { StoreFirstGuard } from './app/storeFirst.guard';
import { AuthComponent } from './app/admin/auth.component';
import { AdminComponent } from './app/admin/admin.component';

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
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AdminComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./app/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [StoreFirstGuard],
  },
  { path: '**', redirectTo: 'auth' },
  { path: '**', redirectTo: '/store' },
];
