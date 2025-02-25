import {
  Routes,
  RouterModule,
  mapToResolve,
  mapToCanActivate,
  mapToCanActivateChild,
} from '@angular/router';
import { TableComponent } from './core/table.component';
import { FormComponent } from './core/form.component';
import { ProductCountComponent } from './core/productCount.component';
import { CategoryCountComponent } from './core/categoryCount.component';
import { ModelResolver } from './model/model.resolver';
import { TermsGuard } from './terms.guard';
import { NotFoundComponent } from './core/notFoundComponent';

const childRoutes: Routes = [
  {
    path: '',
    canActivateChild: mapToCanActivateChild([TermsGuard]),
    children: [
      { path: 'products', component: ProductCountComponent },
      { path: 'categories', component: CategoryCountComponent },
      { path: '', component: ProductCountComponent },
    ],
    resolve: { model: mapToResolve(ModelResolver) },
  },
];

const routes: Routes = [
  {
    path: 'form/:mode/:id',
    component: FormComponent,
    resolve: { model: mapToResolve(ModelResolver) },
  },
  {
    path: 'form/:mode',
    component: FormComponent,
    resolve: { model: ModelResolver },
    canActivate: mapToCanActivate([TermsGuard]),
  },
  { path: 'does', redirectTo: '/form/create', pathMatch: 'prefix' },
  { path: 'table', component: TableComponent, children: childRoutes },
  { path: 'table/:category', component: TableComponent, children: childRoutes },
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

export const routing = RouterModule.forRoot(routes, {
  bindToComponentInputs: true,
});
