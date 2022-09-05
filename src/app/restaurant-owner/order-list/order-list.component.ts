import { Component, OnInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
import { RestoService } from '../../shared/service/resto.service';
import { CartService } from '../../shared/service/cart.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  user: any;
  public LoginUserDetails!: any;

  public OrderList: any = [];
  selectedData: any = [];
  Role: any;
  restaurant: any;
  // date : any;
  startDate = new Date('2000-08-18');
  endDate = new Date('2022-12-18');
  dateObj = new Date();
  grandTotal: any = 0;
  // dataSource=new MatTableDataSource(this.OrderList);

  constructor(private resto: RestoService, private CartServ: CartService) {}

  ngOnInit(): void {
    // this.CartServ.getUser();
    this.getOrderByResto();
  }
  getOrderByResto() {
    this.CartServ.getLoginUserDetails().subscribe((result: any) => {
      console.log('login user details item', result);
      this.LoginUserDetails = result;

      console.log(this.LoginUserDetails);
      // console.log(this.restaurant)
      this.Role = this.LoginUserDetails.role.toString().split(',');
      console.log('after split' + this.Role[1]);

      this.restaurant = this.Role[1];
      this.resto.getOrderByResto(this.restaurant).subscribe((result) => {
        console.log(result, ' from getOrderByResto ');
        this.OrderList = result;
        console.log(this.OrderList[1].datetime, 'this  of Date');
        console.log(typeof this.OrderList[1].datetime, 'this type of Date');
      });
    });
  }

  SetStatus(id: any) {
    this.resto.SetOrderStatus(id).subscribe((result: any) => {
      console.log(result, 'result ');
      this.getOrderByResto();
    });
  }

  getTotal() {
    // let grandTotal = 0;
    console.log('this is item in gt' + this.OrderList);
    this.OrderList.map((a: any) => {
      this.OrderList += a.price;
      console.log(a.price);
    });
    console.log(this.grandTotal);
    return this.grandTotal;
  }
}
