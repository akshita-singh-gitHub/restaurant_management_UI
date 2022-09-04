import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { RegisterComponent } from './register/register.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// import { CustomPipe } from './appPipes/custom.pipes';
import { FilterPipe } from './appPipes/filter.pipe';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { RestoMenuComponent } from './resto-menu/resto-menu.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { LoginComponent } from './login/login.component';
import { TagComponent } from './tag/tag.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminRestoListComponent } from './admin-resto-list/admin-resto-list.component';
import { AdminMenuListComponent } from './admin-menu-list/admin-menu-list.component';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';
import { UpdateFoodItemComponent } from './update-food-item/update-food-item.component';
import { RestoOwnerComponent } from './resto-owner/resto-owner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminSalesComponent } from './admin-sales/admin-sales.component';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


export const firebaseConfig = {
  apiKey: "AIzaSyDoXsIfgzOtUueno6qnlwdRM5Vi7dcee2k",
  authDomain: "restaurant-authen12.firebaseapp.com",
  projectId: "restaurant-authen12",
  storageBucket: "restaurant-authen12.appspot.com",
  messagingSenderId: "71740041038",
  appId: "1:71740041038:web:6859cb83f79bfd8f61601f"
};


@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,

   
    RegisterComponent,
    ListRestoComponent,
    
    // CustomPipe,
    FilterPipe,
    OrdersComponent,
    OrderListComponent,
    CheckoutComponent,

    RestoMenuComponent,
      AddToCartComponent,
      LoginComponent,
      TagComponent,
      OrderHistoryComponent,
      AdminRestoListComponent,
      AdminMenuListComponent,
      AddFoodItemComponent,
      UpdateFoodItemComponent,
      RestoOwnerComponent,
      AdminSalesComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // MatTableModule ,
    FormsModule,
    // RatingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
   

  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('app module  loaded')
  }
 }
  

 

