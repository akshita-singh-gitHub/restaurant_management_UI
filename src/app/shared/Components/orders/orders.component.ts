import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestoService } from '../../service/resto.service';
import { CartService } from '../../service/cart.service';
import { FoodDetail } from '../../model';
// import { StarRatingComponent } from 'ng-starrating';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public LoginUserDetails!: any;
  public FoodList!: any;
  public Available!: boolean;
  public Tag: string[] = [];
  public selectedTag!: any;
  user: any;

  constructor(
    private resto: RestoService,
    private CartServ: CartService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.CartServ.getLoginUserDetails().subscribe((result: any) => {
      console.log('login user details item', result);
      this.LoginUserDetails = result;
    });
    this.getTag();

    console.log('Before  getFoodItem in order comp');
  }

  AddToCart(UserId: any, customerName: any, foodId: any) {
    this.resto
      .AddToCart(UserId, customerName, foodId)
      .subscribe((result: any) => {
        console.log(result);
      });
  }

  getFoodByTag(data: any) {
    this.selectedTag = data;
    if (this.selectedTag == null) {
      this.resto.getFoodList().subscribe((result: FoodDetail[]) => {
        this.FoodList = result;
        console.log('Before type');

        console.log('type', typeof this.FoodList.Available);
      });
    } else this.selectedTag != null;
    {
      this.resto
        .getFoodByTag(this.selectedTag)
        .subscribe((result: FoodDetail[]) => {
          this.FoodList = result;
          console.log('Before type');
          console.log(this.FoodList);
          console.log('type', typeof this.FoodList);
        });
    }
  }

  getTag() {
    this.resto.getFoodList().subscribe((result: FoodDetail[]) => {
      this.FoodList = result;
      // console.log(result)

      this.FoodList.map((a: any) => {
        //  console.log(a.tag)
        a.tag = a.tag.split(',');
        a.tag.forEach((elem: any) => {
          this.Tag.push(elem);
        });
      });
      console.log(this.Tag);
      this.Tag = [...new Set(this.Tag)];
      console.log(this.Tag);
    });
  }
}
