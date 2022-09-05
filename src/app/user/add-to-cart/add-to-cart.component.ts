import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestoService } from '../../shared/service/resto.service';
import { CartService } from '../../shared/service/cart.service';

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
  public array: any = [];
  public grandTotal: number = 0;
  public flag: boolean = false;
  ItemLength: any;

  constructor(
    private CartServ: CartService,
    private router: ActivatedRoute,
    private resto: RestoService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.CartServ.getLoginUserDetails().subscribe((result: any) => {
      console.log('login user details item', result);
      this.LoginUserDetails = result;

      console.log(this.LoginUserDetails);
      console.log('svad', this.LoginUserDetails.id, this.LoginUserDetails.name);

      this.GetCart();
    });
  }

  GetCart() {
    console.log(this.LoginUserDetails.name, this.LoginUserDetails.id);

    this.resto
      .getCartListTable(this.LoginUserDetails.id)
      .subscribe((result: any) => {
        console.log('this is from getCartItemsApi', result);
        console.log('this is from getCartItemsApi', result.length);

        this.item = result;
        this.ItemLength = result.length;
        this.grandTotal = this.getTotal();
        this.item.map((a: any) => {
          this.array.push(a.cartItems);
          console.log(this.array);
        });
      });
  }

  DeleteItem(cart: any) {
    this.resto.removeItem(cart).subscribe((result: any) => {
      console.log('delete item', result);

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
    console.log('this is item in gt' + this.item);
    this.item.map((a: any) => {
      this.grandTotal += a.price;
      console.log(a.price);
    });
    console.log(this.grandTotal);
    return this.grandTotal;
  }

  setCartToCheckout() {
    this.CartServ.setCartToCheckout(this.array);
  }
  setGrandTotal(grandTotal: number) {
    this.CartServ.setGrandTotal(grandTotal);
  }
}
