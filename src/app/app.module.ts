import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './Authentication/register/register.component';
import { ListRestoComponent } from './shared/Components/list-resto/list-resto.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FilterPipe } from './shared/appPipes/filter.pipe';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { OrdersComponent } from './shared/Components/orders/orders.component';

import { RestoMenuComponent } from './shared/Components/resto-menu/resto-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Authentication/login/login.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

export const firebaseConfig = {
  apiKey: 'AIzaSyDoXsIfgzOtUueno6qnlwdRM5Vi7dcee2k',
  authDomain: 'restaurant-authen12.firebaseapp.com',
  projectId: 'restaurant-authen12',
  storageBucket: 'restaurant-authen12.appspot.com',
  messagingSenderId: '71740041038',
  appId: '1:71740041038:web:6859cb83f79bfd8f61601f',
};

@NgModule({
  declarations: [
    AppComponent,

    RegisterComponent,
    ListRestoComponent,

    FilterPipe,
    OrdersComponent,

    RestoMenuComponent,

    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    FormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('app module  loaded');
  }
}
