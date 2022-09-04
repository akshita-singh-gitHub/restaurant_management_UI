import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { RestoService } from '../resto.service';
import { FoodDetail } from '../shared/models/foodDetail';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public OrderArr!: any;
  public grandTotal: number=0;
  public LoginUserDetails!: any;
  FoodImages: FoodDetail[] = [];
  alert: boolean = false;
  UserOrderDetails: any;
  user: any;
  UserCart: any;
 public array: any =[];
 array2:any;
  constructor(private resto: RestoService, private CartServ: CartService, private router: ActivatedRoute) { }

  CheckoutForm = new FormGroup({
    CustomerName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]),
    Order: new FormControl(''),
    // Email: new FormControl('',[Validators.required,Validators.email]),
    Address: new FormControl('', [Validators.required]),
  })



  ngOnInit(): void {

    this.getUser();
    this.getCart();
    
  }

  getCart(){
    var temp:any=[];
    this.resto.getCartListTable(this.LoginUserDetails.id).subscribe((result: any) => {
      console.log("this is from getCartItemsApi", result)
      console.log("this is from getCartItemsApi", result.length)

      this.UserCart = result;

      this.UserCart.map((a: any) => {
        this.array.push(a.cartItems);
      
        console.log("this is arraty"+temp);
      })
this.array2=this.array.toString();
console.log(this.array)
console.log(this.array2)
console.log(typeof(this.LoginUserDetails.name),"type customer name")
console.log(typeof(this.array),"type array ")
console.log(typeof(this.array2),"type array2 ")
      this.grandTotal = this.getTotal();

    
   
console.log(this.array2,"minvikhjkh")


    this.CheckoutForm = new FormGroup({
      CustomerName: new FormControl(this.LoginUserDetails.name),
      // Email: new FormControl(this.LoginUserDetails.email),
      Order: new FormControl(this.array2),
      Address: new FormControl(''),
      // GrandTotal: new FormControl(this.grandTotal),
    })

    })
  }
 
  CollectOrder() {
    console.log(this.CheckoutForm.value);
    // this.UserOrderDetails=JSON.stringify(this.CheckoutForm.value)
    var res: any = this.CheckoutForm.value;
    console.log(typeof (res), "type minvik");
    console.log(res, "res minvik");
    this.resto.PlaceOrder(res, this.LoginUserDetails.id).subscribe((result: any) => {
      console.log(result)
      this.alert = true
      this.CheckoutForm.reset({})
    })

  }

  EmptyCart(id: any) {
    this.resto.removeAllCart(id).subscribe((result: any) => {
      console.log(result);
      // this.item = result;


    });

  }

  getTotal() {
    // let grandTotal = 0;
    console.log("this is item in gt" + this.UserCart)
    this.UserCart.map((a: any) => {
      this.grandTotal += a.price;
      console.log(a.price);
    })
    console.log(this.grandTotal);
    return this.grandTotal;

  }


  getUser() {
    this.CartServ.getLoginUserDetails().subscribe((result: any) => {
      console.log("login user details item", result);
      this.LoginUserDetails = result;
      
    });
    console.log(this.LoginUserDetails.id, this.LoginUserDetails.name);
  }
  CloseAlert() {
    this.alert = false
  }
  get Name() {
    return this.CheckoutForm.get('Name');
  }
  get Email() {
    return this.CheckoutForm.get('Email');
  }
  get Address() {
    return this.CheckoutForm.get('Address');
  }





}




