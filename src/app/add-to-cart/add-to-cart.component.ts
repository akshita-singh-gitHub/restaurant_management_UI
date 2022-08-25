import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestoService } from '../resto.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],

})

export class AddToCartComponent implements OnInit {
  public LoginUserName!: string;
  public LoginUserDetails!: any;
  public UserCartDetails!: any;
  public item!: any;
  public user!: any;
  public array: any=[];
  public grandTotal: number=0;
  public flag: boolean = false;
  ItemLength: any;


 

  constructor(private CartServ: CartService, private router: ActivatedRoute, private resto: RestoService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

     this.user=localStorage.getItem('authToken');

  
       this.LoginUserDetails = JSON.parse(this.user);
console.log(this.LoginUserDetails.id,this.LoginUserDetails.name);

    this.GetCart();
  }


  GetCart() {

    this.resto.getCartListTable(this.LoginUserDetails.id).subscribe((result: any) => {
      console.log("this is from getCartItemsApi", result)
      console.log("this is from getCartItemsApi", result.length)

      this.item=result;
      this.ItemLength=result.length
      this.grandTotal = this.getTotal();
      this.item.map((a: any) => {
        this.array.push(a.cartItems);
        console.log(this.array);
      })
      // if ( result.cartItems==null) {
      //   console.log(result.length);
      //   this.item = null;
      //   console.log("this.item "+this.item)
      // }
      // else {
    
      //   this.array=result.cartItems
      //   console.log("this is from add to cart" + this.array);

      //   console.log("After tostring()" + this.array.toString());

      //   this.UserCartDetails = this.array.toString().split(",");
      //   console.log("after split" + this.UserCartDetails);

      //   this.resto.getFoodDetail(this.UserCartDetails).subscribe((cart: any) => {
      //     console.log("this is from get userCart()", cart);

      //     this.item = cart;
      //     this.flag = true;

      //    
      //     console.log("after gt")
      //   })

      // }
    })

  }

  DeleteItem(cart:any) {
    this.resto.removeItem(cart).subscribe((result: any) => {
      console.log("delete item", result);
      // this.item = result;
      //  this.LoadData();
      this.GetCart();
    });

  }

  emptyCart(id: any) {
    this.resto.removeAllCart(id).subscribe((result: any) => {
      console.log(result);
      // this.item = result;
      this.GetCart();

    });


  }
  getTotal() {
    // let grandTotal = 0;
    console.log("this is item in gt" + this.item)
    this.item.map((a: any) => {
      this.grandTotal += a.price;
      console.log(a.price);
    })
    console.log(this.grandTotal);
    return this.grandTotal;

  }

  setCartToCheckout(){
    this.CartServ.setCartToCheckout(this.array);
  }
  setGrandTotal(grandTotal:number){
    this.CartServ.setGrandTotal(grandTotal);
  }



}
