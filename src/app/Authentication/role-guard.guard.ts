import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../shared/service/cart.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardGuard implements CanActivate {
  public LoginUserDetails!: any;
  public user!: any;
  public Role!: any;
  constructor(private CartServ: CartService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.getUserRole(route);
  }

  getUserRole(route: ActivatedRouteSnapshot) {
    // this.CartServ.getUser();
    this.CartServ.getLoginUserDetails().subscribe((result: any) => {
      console.log('login user details item', result);
      this.LoginUserDetails = result;
    });
    console.log(this.LoginUserDetails.id, this.LoginUserDetails.name);
    this.Role = this.LoginUserDetails.role.toString().split(',');
    const expectedRoles = route.data['expectedRoles'];
    const roleMatches = expectedRoles.indexOf(this.Role[0]);
    return roleMatches < 0 ? false : true;
  }
}
