import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestoService } from './resto.service';
import { CartService } from './service/cart.service';

declare var window:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
private user! :any

 formModal:any;
  public LoginUserDetails!:any;
  title='Restaurant_management';
  constructor(private resto: RestoService, private CartServ : CartService,
    private router: Router){}

  ngOnInit(): void {

   console.log("tresting app comp")
   this.user=localStorage.getItem('authToken')
   console.log(typeof(this.user),"type of user app");

      this.resto.UserInfo(JSON.parse(this.user)).subscribe((result:any)=>{
        console.log(result,"userinfo");
        this.LoginUserDetails=JSON.parse(result);
        this.CartServ.setLoginUserDetails(this.LoginUserDetails);
        
      });
    
    


  
//     this.LoginUserDetails = JSON.parse(this.user);
// console.log(this.LoginUserDetails.id,this.LoginUserDetails.name);

// this.LoginUserDetails= this.CartServ.getUser()

// console.log(this.LoginUserDetails)
 

  this.formModal=  new window.bootstrap.Modal(
    document.getElementById("exampleModal")
  );
}

// getUser(){
//   this.user=localStorage.getItem('authToken');
//   if(this.user!=null)
//   {
//   this.LoginUserDetails = JSON.parse(this.user);
// console.log(this.LoginUserDetails.id,this.LoginUserDetails.name);}
// }

openModal(){
  // this.confirm=true;
  // console.log("in confirmation dialog")
  this.formModal.show();
}
closeModal(){
  this.formModal.hide();
}

DeleteUserAccount(Id:any){
  this.resto.DeleteUserAccount(Id).subscribe((result:any)=>{
    console.log("signed out successfully");
    this.ngOnInit();
    // this.router.navigate(['/order']);
   
  });
  // this.resto.DeleteUserCart(UserId).subscribe((result:any)=>{
  //   console.log("Deleted User cart successfully");
    
  // });
}

Logout(Data:any){
  localStorage.removeItem('authToken');
  this.router.navigate(['/login']);
  this.ngOnInit();

}
  }