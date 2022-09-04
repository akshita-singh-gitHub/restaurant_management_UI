import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminMenuListComponent } from './admin-menu-list/admin-menu-list.component';
import { AuthGuardGuard } from '../shared/auth-guard.guard';
import { RoleGuardGuard } from '../shared/role-guard.guard';
import { AdminRestoListComponent } from './admin-resto-list/admin-resto-list.component';
import { AdminSalesComponent } from './admin-sales/admin-sales.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddRestoComponent } from './add-resto/add-resto.component';
// import { FilterPipe } from './appPipes/filter.pipe';

const adminRoutes: Routes = [
  {
    path: '', children: [
      {
        path: 'AdminMenuList', component: AdminMenuListComponent,
        canActivate: [AuthGuardGuard, RoleGuardGuard],
        data: {
          expectedRoles: ['Admin']
        }
      },
      {
        path: 'AddResto', component: AddRestoComponent,
        canActivate: [AuthGuardGuard, RoleGuardGuard],
        data: {
          expectedRoles: ['Admin']
        }
      },
      {
        path: 'AdminRestoList', component: AdminRestoListComponent,
        canActivate: [AuthGuardGuard, RoleGuardGuard],
        data: {
          expectedRoles: ['Admin']
        }
      },
      {
        path: 'AdminSales', component: AdminSalesComponent,
        canActivate: [AuthGuardGuard, RoleGuardGuard],
        data: {
          expectedRoles: ['Admin']
        }
      },
      {
        path: 'AdminRestoList/updateResto/:id',component: UpdateRestoComponent,
        canActivate:[AuthGuardGuard,RoleGuardGuard],
        data:{
          expectedRoles:['Admin']
        }

      },
    ]
  }
];

@NgModule({
  declarations: [
    AdminMenuListComponent,
    AddRestoComponent,
    AdminSalesComponent,
    AdminRestoListComponent,
    UpdateRestoComponent,
    // FilterPipe,
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule {
  constructor() {
    console.log('Admin module  loaded')
  }
}
