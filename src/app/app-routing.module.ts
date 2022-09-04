import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddRestoComponent } from './admin/add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { UpdateRestoComponent } from './admin/update-resto/update-resto.component';
import { OrdersComponent } from './orders/orders.component';
// import { OrderListComponent } from './restaurant-owner/order-list/order-list.component';
// import { CheckoutComponent } from './user/checkout/checkout.component';
import { RestoMenuComponent } from './resto-menu/resto-menu.component';
// import { AddToCartComponent } from './user/add-to-cart/add-to-cart.component';
import { LoginComponent } from './login/login.component';
// import { OrderHistoryComponent } from './user/order-history/order-history.component';
// import { AdminRestoListComponent } from './admin/admin-resto-list/admin-resto-list.component';
// import { AdminMenuListComponent } from './admin/admin-menu-list/admin-menu-list.component';
// import { AddFoodItemComponent } from './restaurant-owner/add-food-item/add-food-item.component';
// import { UpdateFoodItemComponent } from './restaurant-owner/update-food-item/update-food-item.component';
import { RoleGuardGuard } from './shared/role-guard.guard';
// import { RestoOwnerComponent } from './restaurant-owner/resto-owner/resto-owner.component';
// import { AdminSalesComponent } from './admin/admin-sales/admin-sales.component';
import { AuthGuardGuard } from './shared/auth-guard.guard';



const routes: Routes = [
// {
//   component: AddRestoComponent,
//   path: 'addResto',
//   canActivate:[AuthGuardGuard,RoleGuardGuard],
//   data:{
//     expectedRoles:['Admin','Restaurant Owner']
//   }
 
// },


{
  component: RegisterComponent,
  path: 'register',

 
},

{
  component: OrdersComponent,
  path: 'orders',
 
 
},

// {
//   component: CheckoutComponent,
//   path: 'checkout/:id',
//   canActivate:[AuthGuardGuard,RoleGuardGuard],
//   data:{
//     expectedRoles:['User']
//   }
 
// },
// {
//   component: CheckoutComponent,
//   path: 'checkout',
//   canActivate:[AuthGuardGuard,RoleGuardGuard],
//   data:{
//     expectedRoles:['Admin','Restaurant Owner','User']
//   }
 
// },
{
  component: RestoMenuComponent,
  path: 'RestoMenu/:name',
 
 
},
// {
//   component: AddToCartComponent,
//   path: 'cart',
//   canActivate:[AuthGuardGuard,RoleGuardGuard],
//   data:{
//     expectedRoles:['User']
//   }
 
// },
{
  component: LoginComponent,
  path: 'login',

 
},

// {
//   component: OrderHistoryComponent,
//   path: 'OrderHistory',
//   canActivate:[AuthGuardGuard,RoleGuardGuard],
//   data:{
//     expectedRoles:['User']
//   }
  
  
// },


{
  component: ListRestoComponent,
  path: '',



},


{
  path: 'admin',
  loadChildren : ()=>import('./admin/admin.module').then(m=>m.AdminModule)
 
},
{
  path: 'restaurant-owner',
  loadChildren : ()=>import('./restaurant-owner/restaurant-owner.module').then(m=>m.RestaurantOwnerModule)
 
},
{
  path: 'user',
  loadChildren : ()=>import('./user/user.module').then(m=>m.UserModule)
 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log('app routing  module loaded')
  }
}
