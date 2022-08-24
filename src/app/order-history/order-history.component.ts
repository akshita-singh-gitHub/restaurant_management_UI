import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  public LoginUserDetails!: any;
  public UserOrderDetails!: any;
  public OrderItem!: any;
  public user!: any;
  public array!: any;
  public flag!: any;
  grandTotal: any=0;
  ItemLength: any;


  constructor(private CartServ: CartService, private resto: RestoService) { }

  ngOnInit(): void {

    // this.CartServ.getLoginUserDetails().subscribe((result: any) => {
    //   console.log(result);
    //   if (result != '')
     
    // })

    this.user=localStorage.getItem('authToken');

  
    this.LoginUserDetails = JSON.parse(this.user);
console.log(this.LoginUserDetails.id,this.LoginUserDetails.name);

    this.GetCart();
  }


  GetCart() {

  this.resto.GetOrderByCustomer(this.LoginUserDetails.name).subscribe((result: any) => {
      console.log("this is from getCartListTable", result)
      this.OrderItem=result;
      this.ItemLength=result.length
      this.grandTotal = this.getTotal();

     })


  }


  getTotal() {
    // let grandTotal = 0;
    console.log("this is item in gt" + this.OrderItem)
    this.OrderItem.map((a: any) => {
      this.grandTotal += a.price;
      console.log(a.price);
    })
    console.log(this.grandTotal);
    return this.grandTotal;

  }
}
