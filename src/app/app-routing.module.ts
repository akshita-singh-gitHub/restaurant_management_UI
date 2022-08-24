import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RestoMenuComponent } from './resto-menu/resto-menu.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { LoginComponent } from './login/login.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminRestoListComponent } from './admin-resto-list/admin-resto-list.component';
import { AdminMenuListComponent } from './admin-menu-list/admin-menu-list.component';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';
import { UpdateFoodItemComponent } from './update-food-item/update-food-item.component';
import { RoleGuardGuard } from './shared/role-guard.guard';
import { RestoOwnerComponent } from './resto-owner/resto-owner.component';
import { AdminSalesComponent } from './admin-sales/admin-sales.component';
import { AuthGuardGuard } from './shared/auth-guard.guard';



const routes: Routes = [
{
  component: AddRestoComponent,
  path: 'addResto',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['Admin','Restaurant Owner']
  }
 
},
{
  component: AddFoodItemComponent,
  path: 'addFoodItem',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['Admin','Restaurant Owner']
  }
 
},

{
  component: UpdateRestoComponent,
  path: 'updateResto/:id',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['Admin']
  }
  // , outlet:'update'
},
{
  component: UpdateFoodItemComponent,
  path: 'updateFoodItem/:id',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['Admin','Restaurant Owner']
  }
 
},

{
  component: RegisterComponent,
  path: 'register',

 
},

{
  component: OrdersComponent,
  path: 'orders',
 
 
},
{
  component: OrderListComponent,
  path: 'OrderList',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['Admin','Restaurant Owner']
  }
 
},
{
  component: CheckoutComponent,
  path: 'checkout/:id',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['Admin','Restaurant Owner','User']
  }
 
},
{
  component: CheckoutComponent,
  path: 'checkout',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['Admin','Restaurant Owner','User']
  }
 
},
{
  component: RestoMenuComponent,
  path: 'RestoMenu/:name',
 
 
},
{
  component: AddToCartComponent,
  path: 'cart',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['User','Restaurant Owner']
  }
 
},
{
  component: LoginComponent,
  path: 'login',

 
},

{
  component: OrderHistoryComponent,
  path: 'OrderHistory',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['User','Restaurant Owner']
  }
  
  
},
{
  component: AdminRestoListComponent,
  path: 'AdminRestoList',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['Admin']
  }
  
},
{
  component: AdminMenuListComponent,
  path: 'AdminMenuList',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['Admin']
  }
  
},
{
  component: AdminSalesComponent,
  path: 'AdminSales',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['Admin']
  }
  
},
{
  component: RestoOwnerComponent,
  path: 'RestoOwner',
  canActivate:[AuthGuardGuard,RoleGuardGuard],
  data:{
    expectedRoles:['Admin','Restaurant Owner']
  }

  
},

{
  component: ListRestoComponent,
  path: '',


  // ,outlet:'listLet'
},


{
  path: 'company',
  loadChildren : ()=>import('./company/company.module').then(m=>m.CompanyModule)
 
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
