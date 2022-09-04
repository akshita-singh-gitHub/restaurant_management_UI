import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const adminRoutes: Routes = [
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AdminModule { 
  constructor(){
    console.log('Admin module  loaded')
  }
}
