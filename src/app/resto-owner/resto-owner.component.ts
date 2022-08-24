import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { FoodDetail } from '../shared/models/foodDetail';

@Component({
  selector: 'app-resto-owner',
  templateUrl: './resto-owner.component.html',
  styleUrls: ['./resto-owner.component.css']
})
export class RestoOwnerComponent implements OnInit {
  public LoginUserDetails!:any;
  public user!:any;
  public Role: any;
  public Restaurant: any;
 
  restaurant:any;
  name:any=[];
  Detail: any = [];
  FoodList: any;
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
    this.getUser();
this.getMenuList();
   
  }

  getUser(){
    this.user=localStorage.getItem('authToken');
    this.LoginUserDetails = JSON.parse(this.user);
  console.log(this.LoginUserDetails,this.LoginUserDetails.name);
  // return this.LoginUserDetails.role;
  this.Role = this.LoginUserDetails.role.toString().split(",");
  console.log("after split" + this.Role[1]);

  this.restaurant= this.Role[1];
  // this.restaurant=this.restaurant.replace(' ','');
  return this.restaurant;
  
  }

  getMenuList(){
    console.log(this.restaurant)
    this.resto.getRestoMenu(this.restaurant).subscribe((result:any) => {
      console.log("result  ",result);
      this.Detail = result;
    })
  
  }
  DeleteFood(item:any){
    this.FoodList.splice(item,1)
    this.resto.DeleteFoodItem(item).subscribe((result:any )=>{
      console.log(result ,'result deleted');
      this.getMenuList();
    })
          

  }

  DisableFood(id:any){
    this.resto.SetFoodAvailability(id).subscribe((result:any )=>{
      console.log(result ,'result ');
      this.getMenuList();
    })
          

  }


}
