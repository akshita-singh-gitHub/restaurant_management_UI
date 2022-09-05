import { Component, OnInit } from '@angular/core';
import { RestoService } from '../../shared/service/resto.service';
import { CartService } from '../../shared/service/cart.service';

@Component({
  selector: 'app-admin-sales',
  templateUrl: './admin-sales.component.html',
  styleUrls: ['./admin-sales.component.css'],
})
export class AdminSalesComponent implements OnInit {
  user: any;
  public LoginUserDetails!: any;

  public OrderList: any = [];
  selectedData: any = [];
  Role: any;
  restaurant: any;
  customerName: any;

  // // date : any;
  // startDate = new Date("2000-08-18")
  startDate2 = new Date('2000-08-18');
  // endDate = new Date("2020-12-18")
  startDate = new Date();
  endDate = new Date();
  dateObj = new Date();
  trialDate: any;
  key: any = 'customerName';
  reverse: boolean = false;
  public OrderLength: any;
  public grandTotal: any = 0;

  constructor(private resto: RestoService, private CartServ: CartService) {}

  ngOnInit(): void {
    // this.restaurant=this.CartServ.getUser();

    this.getOrderList();
    // this.FilterByDate();
  }

  Search() {
    if (this.customerName == '') this.getOrderList();
    else {
      this.selectedData = this.OrderList.filter((res: any) => {
        return res.customerName
          .toLocaleLowerCase()
          .match(this.customerName.toLocaleLowerCase());
      });
    }
  }

  getOrderList() {
    this.CartServ.getLoginUserDetails().subscribe((result: any) => {
      console.log('login user details item', result);
      this.LoginUserDetails = result;

      console.log(this.LoginUserDetails);
      // console.log(this.restaurant)
      this.Role = this.LoginUserDetails.role.toString().split(',');
      console.log('after split' + this.Role[1]);

      this.restaurant = this.Role[1];
      console.log(this.restaurant);
      this.resto.getOrderList().subscribe((result: any) => {
        console.log('result  ', result);
        this.OrderList = result;
        this.selectedData = result;
        this.getTotal();
        this.OrderLength = this.OrderList.length;
        // this.FilterByDate();
      });
    });
  }

  FilterByDate() {
    this.selectedData = [];
    for (let i = 0; i < this.OrderList.length; i++) {
      var _date = new Date(this.OrderList[i].datetime);

      this.startDate = new Date(this.startDate);
      this.endDate = new Date(this.endDate);

      if (
        _date.toISOString() >= this.startDate.toISOString() &&
        _date.toISOString() <= this.endDate.toISOString()
      ) {
        console.log('thisis in if cond ', this.OrderList[i]);
        this.selectedData.push(this.OrderList[i]);
      }
    }

    this.getTotal();
  }
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  getTotal() {
    // let grandTotal = 0;
    console.log('this is item in gt' + this.selectedData);
    this.selectedData.map((a: any) => {
      this.grandTotal += a.price;
      console.log(a.price);
    });
    console.log(this.grandTotal);
    return this.grandTotal;
  }
}
