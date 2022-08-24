import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestoService } from '../resto.service';
import { CartService } from '../service/cart.service';
import { FoodDetail } from '../shared/models/foodDetail';
// import { StarRatingComponent } from 'ng-starrating';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public LoginUserDetails!:any;
  public FoodList!:any;
  public Available!:boolean;
  public Tag: string  []= [];
  public selectedTag!:any;
  user: any;
  
  

  constructor(private resto: RestoService, private CartServ:CartService, private router : ActivatedRoute ) { }




  ngOnInit(): void {

  
 
   this.getTag();
   this.getUser();
  
console.log("Before  getFoodItem in order comp")
  // this.CartServ.getFoodItem().subscribe((result: any) => {
  //   this.FoodList=result ;
  //   console.log(result);
  //   // this.FoodList=JSON.parse(result); 
  //   console.log(this.FoodList)

  // })

  }

  getUser(){
    this.user=localStorage.getItem('authToken');
    if(this.user!=null)
    {
    this.LoginUserDetails = JSON.parse(this.user);
  console.log(this.LoginUserDetails.id,this.LoginUserDetails.name);}
  }

  AddToCart(UserId:any,customerName:any,foodId:any){
this.resto.AddToCart(UserId,customerName,foodId).subscribe((result:any)=>{
  console.log(result);
        
  
 
});

  }

  getFoodByTag(data:any){
    this.selectedTag=data;
    if(this.selectedTag==null){
      this.resto.getFoodList().subscribe((result: FoodDetail[]) => {
        this.FoodList=result ;
        console.log("Before type")
      
       console.log("type", typeof(this.FoodList.Available));
        // console.log(result)
        // console.log(this.selectedTag)
     
      })}
      else (this.selectedTag!=null)
      {
    this.resto.getFoodByTag(this.selectedTag).subscribe((result: FoodDetail[]) => {
      this.FoodList=result ;
      console.log("Before type")
      console.log(this.FoodList)
      console.log("type", typeof(this.FoodList));
     
      // console.log("getFoodByTag"+this.FoodList);
      // console.log("getFood by Tag"+this.selectedTag)
    })
  }}
  

  getTag(){
    this.resto.getFoodList().subscribe((result: FoodDetail[]) => {
      this.FoodList=result ;
      // console.log(result)
   
      this.FoodList.map((a: any) => {
      //  console.log(a.tag)
    a.tag=a.tag.split(',');
   a.tag.forEach((elem:any) => {
    this.Tag.push(elem);
   });
      
      })
      console.log(this.Tag);
      this.Tag=[...new Set(this.Tag)];
      console.log(this.Tag);
    })
  }



  
 


  

 

  
}

