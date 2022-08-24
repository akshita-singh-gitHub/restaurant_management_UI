import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../service/cart.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  public LoginUserDetails!:any;
  public user!:any;
  public Role!:any;
  constructor( private cartServ: CartService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getUserRole(route);
  }

  getUserRole(route:ActivatedRouteSnapshot){
    this.user=localStorage.getItem('authToken');
    this.LoginUserDetails = JSON.parse(this.user);
  console.log(this.LoginUserDetails.id,this.LoginUserDetails.name);
  this.Role = this.LoginUserDetails.role.toString().split(",");
  const expectedRoles=route.data['expectedRoles'];
  const roleMatches=expectedRoles.indexOf(this.Role[0]);
  return (roleMatches < 0)? false: true;
   
  }

  // canActivate(){
  
  //   var Role=this.getUserRole();
  //   console.log(Role  +"Role")
  //   if(Role=='Admin')
  //   return true;
  //   else 
  //   {alert("u dont have admin rights");
  //     return false;}
  // }
  
}
