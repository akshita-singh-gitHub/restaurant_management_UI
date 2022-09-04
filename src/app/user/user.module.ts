import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AuthGuardGuard } from '../shared/auth-guard.guard';
import { RoleGuardGuard } from '../shared/role-guard.guard';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const UserRoutes: Routes = [
  {
    path: '', children: [
      {
        path: 'OrderHistory', component: OrderHistoryComponent,
         
          canActivate:[AuthGuardGuard,RoleGuardGuard],
          data:{
            expectedRoles:['User']
          }
          
        },
        {
          component: AddToCartComponent,
          path: 'cart',
          canActivate:[AuthGuardGuard,RoleGuardGuard],
          data:{
            expectedRoles:['User']
          }
         
        },
        {
          component: CheckoutComponent,
          path: 'cart/checkout',
          canActivate:[AuthGuardGuard,RoleGuardGuard],
          data:{
            expectedRoles:['User']
          }
         
        },  
     
    ]
  }
];

@NgModule({
  declarations: [
     AddToCartComponent,
    OrderHistoryComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
   
    ReactiveFormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule {
  constructor(){
    console.log("User module loaded");
  }
 }
