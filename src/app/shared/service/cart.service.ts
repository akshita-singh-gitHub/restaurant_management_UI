import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { RestoService } from './resto.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private LoginUserDetails = new BehaviorSubject<any>(null);
  private OrderArr = new BehaviorSubject<any>(null);
  private CartItemDetails = new BehaviorSubject<any>(null);
  private grandTotal = new BehaviorSubject<any>(null);

  public cartItemList: any = [];
  public UserCartList: any = [];
  public FoodList: any = [];
  public user: any;

  public ItemList = new BehaviorSubject<any>([]);
  RestoOwnerDetails: any;
  Role: any;
  restaurant: any;
  details: any;

  constructor(
    private http: HttpClient,
    private resto: RestoService,
    private router: ActivatedRoute
  ) {}

  setLoginUserDetails(data: string) {
    this.LoginUserDetails.next(data);
    console.log('this is from cart service loginn details' + data);
  }
  getLoginUserDetails(): Observable<string> {
    return this.LoginUserDetails.asObservable();
  }
  setCartToCheckout(item: any) {
    console.log('setCartToCheckout' + item);
    this.OrderArr.next(item);
    console.log('this is from cart service' + item);
  }
  getCartToCheckout(): Observable<any> {
    return this.OrderArr.asObservable();
  }

  setGrandTotal(total: any) {
    this.grandTotal.next(total);
  }
  getGrandTotal(): Observable<any> {
    return this.grandTotal.asObservable();
  }

  getUser() {
    this.user = localStorage.getItem('authToken');
    console.log(typeof this.user, 'type of user app');
    if (this.user != null) {
      this.resto.UserInfo(JSON.parse(this.user)).subscribe((result: any) => {
        console.log(result, 'userinfo');
        this.details = JSON.parse(result);
        this.setLoginUserDetails(this.details);
      });
    } else {
      console.log(this.LoginUserDetails);

      this.details = null;
      this.setLoginUserDetails(this.details);
    }
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }
}
