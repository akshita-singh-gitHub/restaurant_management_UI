import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RestoOwnerComponent } from './resto-owner/resto-owner.component';
import { AuthGuardGuard } from '../Authentication/auth-guard.guard';
import { RoleGuardGuard } from '../Authentication/role-guard.guard';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderListComponent } from './order-list/order-list.component';
import { UpdateFoodItemComponent } from './update-food-item/update-food-item.component';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';

const RestaurantOwnerRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'RestoOwner',
        component: RestoOwnerComponent,

        canActivate: [AuthGuardGuard, RoleGuardGuard],
        data: {
          expectedRoles: ['Restaurant Owner'],
        },
      },
      {
        path: 'OrderList',
        component: OrderListComponent,
        canActivate: [AuthGuardGuard, RoleGuardGuard],
        data: {
          expectedRoles: ['Restaurant Owner'],
        },
      },
      {
        path: 'RestoOwner/updateFoodItem/:id',
        component: UpdateFoodItemComponent,

        canActivate: [AuthGuardGuard, RoleGuardGuard],
        data: {
          expectedRoles: ['Restaurant Owner'],
        },
      },
      {
        path: 'RestoOwner/addFoodItem',
        component: AddFoodItemComponent,

        canActivate: [AuthGuardGuard, RoleGuardGuard],
        data: {
          expectedRoles: ['Restaurant Owner'],
        },
      },
    ],
  },
];

@NgModule({
  declarations: [
    AddFoodItemComponent,
    UpdateFoodItemComponent,
    OrderListComponent,
    RestoOwnerComponent,
    // FilterPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forChild(RestaurantOwnerRoutes),
  ],
})
export class RestaurantOwnerModule {
  constructor() {
    console.log('Restaurant Owner module  loaded');
  }
}
