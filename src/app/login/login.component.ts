import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestoService } from '../resto.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public alert: boolean=false;


  constructor(private resto: RestoService, private router: Router, private CartServ : CartService) { }

  LoginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  })

  ngOnInit(): void {
      
  }

  LoginSubmit(){
    this.resto.LoginUser(this.LoginForm.value).subscribe((result:string)=>{
    //  this.user=result;
     console.log(result);
     localStorage.setItem("authToken",result);
    
    if(result=="User Not Found")
    this.alert=true;
    else{
    this.CartServ.setLoginUserDetails(result);
     this.router.navigate(['/cart']);
    }
    })
  }

  CloseAlert() {
    this.alert = false;
    this.LoginForm.reset({});
  }

  get email(){
    return this.LoginForm.get('email');
  }

}
