import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-admin-sales',
  templateUrl: './admin-sales.component.html',
  styleUrls: ['./admin-sales.component.css']
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
  startDate2 = new Date("2000-08-18")
  // endDate = new Date("2020-12-18")
  startDate= new Date();
  endDate= new Date();
  dateObj = new Date
  trialDate: any;
  key:any='customerName';
  reverse: boolean=false;
 public OrderLength: any;
 public grandTotal: any=0;
 

  constructor(private resto : RestoService) { }

  ngOnInit(): void {
    this.getUser();
    this.getOrderList();
    // this.FilterByDate();

  }

  Search(){
    if(this.customerName=='')
      this.getOrderList();
    else{
      this.OrderList=this.OrderList.filter((res:any)=>{
 return res.customerName.toLocaleLowerCase().match(this.customerName.toLocaleLowerCase());
      });
    }
  }


  getUser() {
    this.user = localStorage.getItem('authToken');
    this.LoginUserDetails = JSON.parse(this.user);
    console.log(this.LoginUserDetails.id, this.LoginUserDetails.name);
    this.Role = this.LoginUserDetails.role.toString().split(",");
    console.log("after split" + this.Role[1]);

    this.restaurant = this.Role[1];

    return this.restaurant;
  }

  getOrderList(){
    console.log(this.restaurant)
    this.resto.getOrderList().subscribe((result:any) => {
      console.log("result  ",result);
      this.OrderList = result;
      this.selectedData = result;
      this.getTotal();
      this.OrderLength=this.OrderList.length;
      // this.FilterByDate();   
    })
   
  }

  FilterByDate(){
    // this.startDate=JSON.parse(this.startDate)
    console.log(typeof(this.startDate));
    console.log(typeof(this.trialDate));
    this.selectedData=[];
    console.log("OrderListLenght",this.OrderLength);
    for (let i = 0; i < this.OrderList.length; i++)
     {
      // console.log("This is just after for LOoop for OrderList ",this.OrderList[i])
      var _date = new Date(this.OrderList[i].datetime)
      console.log(_date, typeof(_date),"_date is and type ");
      // var date = `${_date.getFullYear()}-${_date.getMonth()}-${_date.getDate()}`;
      console.log(this.startDate, typeof(this.startDate));
      this.startDate = new Date(this.startDate);
      this.endDate = new Date(this.endDate);
      console.log(this.startDate,typeof(this.startDate),"after conversion and type");
      console.log(this.startDate2,typeof(this.startDate2),"after startDate2 and type");
      // this.endDate = new Date(this.endDate);
      // console.log(date,"date is");

      if (_date.toISOString() >=this.startDate.toISOString() && _date.toISOString() <=this.endDate.toISOString()) {
        console.log("thisis in if cond ",this.OrderList[i])
        this.selectedData.push(this.OrderList[i])
      }

      

    }

    this.getTotal();
  }
sort(key:any){
this.key=key;
this.reverse=!this.reverse;
}

getTotal() {
  // let grandTotal = 0;
  console.log("this is item in gt" + this.selectedData)
  this.selectedData.map((a: any) => {
    this.grandTotal += a.price;
    console.log(a.price);
  })
  console.log(this.grandTotal);
  return this.grandTotal;

}
}
