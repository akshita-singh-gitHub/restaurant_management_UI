import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestoService } from './shared/service/resto.service';
import { CartService } from './shared/service/cart.service';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private user!: any;

  formModal: any;
  public LoginUserDetails!: any;
  title = 'Restaurant_management';
  constructor(
    private resto: RestoService,
    private CartServ: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('tresting app comp');
    this.CartServ.getUser();
    this.CartServ.getLoginUserDetails().subscribe((result: any) => {
      console.log('login user details item', result);
      this.LoginUserDetails = result;
    });

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
  }

  openModal() {
    this.formModal.show();
  }
  closeModal() {
    this.formModal.hide();
  }

  DeleteUserAccount(Id: any) {
    this.resto.DeleteUserAccount(Id).subscribe((result: any) => {
      console.log('signed out successfully');
      this.ngOnInit();
      // this.router.navigate(['/order']);
    });
  }

  Logout() {
    localStorage.removeItem('authToken');
    // this.ngOnInit();
    console.log(this.LoginUserDetails);
    this.CartServ.getUser();
    this.router.navigate(['/login']);
  }
}
