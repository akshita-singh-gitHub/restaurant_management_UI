import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRestoComponent } from './shared/Components/list-resto/list-resto.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { OrdersComponent } from './shared/Components/orders/orders.component';
import { RestoMenuComponent } from './shared/Components/resto-menu/resto-menu.component';
import { LoginComponent } from './Authentication/login/login.component';

const routes: Routes = [
  {
    component: RegisterComponent,
    path: 'register',
  },

  {
    component: OrdersComponent,
    path: 'orders',
  },

  {
    component: RestoMenuComponent,
    path: 'RestoMenu/:name',
  },

  {
    component: LoginComponent,
    path: 'login',
  },

  {
    component: ListRestoComponent,
    path: '',
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'restaurant-owner',
    loadChildren: () =>
      import('./restaurant-owner/restaurant-owner.module').then(
        (m) => m.RestaurantOwnerModule
      ),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {
    console.log('app routing  module loaded');
  }
}
