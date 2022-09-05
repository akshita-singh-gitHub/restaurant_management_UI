import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestoService } from '../../shared/service/resto.service';
import { CartService } from '../../shared/service/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public alert: boolean = false;
  LoginUserDetails: any;

  constructor(
    private resto: RestoService,
    private router: Router,
    private CartServ: CartService
  ) {}

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  LoginSubmit() {
    console.log(typeof this.LoginForm.value, 'type of login');
    this.resto.LoginUser(this.LoginForm.value).subscribe((result: string) => {
      console.log(result);
      localStorage.setItem('authToken', result);

      if (result == 'User Not Found') this.alert = true;
      else {
        this.CartServ.getUser();
        this.CartServ.getLoginUserDetails().subscribe((result: any) => {
          console.log('login user details item', result);
          this.LoginUserDetails = result;
          this.router.navigate(['']);
        });
      }
    });
  }

  CloseAlert() {
    this.alert = false;
    this.LoginForm.reset({});
  }

  get email() {
    return this.LoginForm.get('email');
  }
}
