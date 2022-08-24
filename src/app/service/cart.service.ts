import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { RestoService } from '../resto.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private LoginUserDetails= new BehaviorSubject<any>(null)
  private OrderArr= new BehaviorSubject<any>(null);
  private CartItemDetails= new BehaviorSubject<any>(null);
  private grandTotal= new BehaviorSubject<any>(null);

  public cartItemList:any=[];
  public UserCartList:any=[];
  public FoodList:any=[];
  public user: any;
 
  
  public ItemList=new BehaviorSubject<any>([]);

  
    constructor(private http:HttpClient,private resto: RestoService,private router: ActivatedRoute) { }

    setLoginUserDetails(data:string){
      this.LoginUserDetails.next(data);
      console.log("this is from cart service loginn details"+data);
    }
    getLoginUserDetails():Observable<string>{
      return this.LoginUserDetails.asObservable();
    }
    setCartToCheckout(item:any,){
      console.log("setCartToCheckout"+ item)
      this.OrderArr.next(item);
      console.log("this is from cart service"+item);
    }
    getCartToCheckout():Observable<any>{
      return this.OrderArr.asObservable();
    
    }

    setGrandTotal(total:any){
      this.grandTotal.next(total);
      // console.log("this is from cart service"+data);
    }
    getGrandTotal():Observable<any>{
      return this.grandTotal.asObservable();
    
    }
  
    // getUser(){
    //   this.user=localStorage.getItem('authToken');
    //   this.LoginUserDetails = JSON.parse(this.user);
    // return this.LoginUserDetails;
    // }

  
  // setItem(Item:any){
  //   this.cartItemList.push(Item);
  //   this.ItemList.next(Item)
  // }
 

  getTotalPrice():number {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  // getFoodItem():Observable<any>{
  //     console.log(this.FoodList.asObservable());
  //   return this.FoodList.asObservable();
  //    }

  // setFoodItem(Food:any){
  //   this.FoodList=Food;
  //   console.log(this.FoodList);
  //    }






}
