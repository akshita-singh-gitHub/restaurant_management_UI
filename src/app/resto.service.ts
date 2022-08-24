import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RestoList, User } from './model';
import { Observable } from 'rxjs/internal/Observable';
import { FoodDetail } from './shared/models/foodDetail';
// import { AngularFireDatabase } from '@angular/fire/compat/database';

// import { SignupComponent } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})


export class RestoService {




  url = 'http://localhost:3000/restaurant';
  rootURL = 'http://localhost:3000/';

   private URL ="Restaurant"


  constructor(private http: HttpClient, private fireauth: AngularFireAuth, private router :Router) { }

   public getList(): Observable<RestoList[]> {
    // return this.http.get(this.url);
    return this.http.get<RestoList[]>(`${environment.apiUrl}/${this.URL}`) ;
  }
   public getRestoMenu(name:any): Observable<FoodDetail[]> {
    console.log(name)
    return this.http.get<FoodDetail[]>(`${environment.apiUrl}/`+ "RestoMenu/GetRestoByName"+`/${name}`) ;
  }     
  //  public getOwnerResto(name:any): Observable<FoodDetail[]> {
  //   console.log(name)
  //   return this.http.get<FoodDetail[]>(`${environment.apiUrl}/`+ "RestoOwner/GetRestoByName"+`/${name}`) ;
  // }     
   public SetFoodAvailability(id:any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/`+ "RestoMenu/SetFoodAvailability?id="+`${id}`,{responseType:'text'}) ;
  }     
   public SetOrderStatus(id:any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/`+ "Order/SetOrderStatus?id="+`${id}`,{responseType:'text'}) ;
  }     
   public SetRestoAvailability(id:any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/`+ "RestoMenu/SetRestoAvailability?id="+`${id}`,{responseType:'text'}) ;
  }     
  public getFoodByTag(tag:any): Observable<FoodDetail[]> {
    // return this.http.get(this.url);
    return this.http.get<FoodDetail[]>(`${environment.apiUrl}/`+ "RestoMenu/GetFoodByTag"+`/${tag}`) ;
  } 
   public getCartListTable(UserId:any): Observable<any> {
    // return this.http.get(this.url);
    console.log("this is from resto "+ UserId);
    return this.http.get<any>(`${environment.apiUrl}/`+ "Cart"+`/${UserId}`) ;
    
  }

  public  removeAllCart(UserId:any) {
    // return this.http.get(this.url);
    console.log("this is from resto "+ UserId);
    return this.http.put(`${environment.apiUrl}/`+ "Cart/EmptyCartList"+`/${UserId}`, {responseType:'text'}) ;
    
  }
  public  removeItem(cart:any) {
    // return this.http.get(this.url);
    console.log("this is from resto id and item  "+ cart);
    return this.http.put(`${environment.apiUrl}/`+ "Cart/ModifyCartItems",cart,{responseType:'text'}) ;
    
  }

  public  AddToCart(UserId:any,customerName:any,foodId:any) {
   
    console.log("this is from resto id and item  "+ UserId,foodId,customerName);
    return this.http.put(`${environment.apiUrl}/`+ "Cart/AddCartItem?userId="+`${UserId}`+"&customerName="+`${customerName}`+ "&foodId="+`${foodId}`,{responseType:'text'}) ;
    
  }

  public  PlaceOrder(Order:any,UserId:any) {
    
    console.log("this is from resto id and item  "+ Order);
    return this.http.post(`${environment.apiUrl}/`+ "Order/PlaceOrder?UserId="+`${UserId}`,Order,{responseType:'text'}) ;

  }

  public DeleteUserCart(UserId:any): Observable<any> {
 
    return this.http.delete<any>(`${environment.apiUrl}/`+ "Cart"+`/${UserId}`) ;
    
  }
  public DeleteUserAccount(Id:any): Observable<any> {
 
    return this.http.delete<any>(`${environment.apiUrl}/`+ "User"+`/${Id}`) ;
    
  }

  

  public getFoodDetail(data:any): Observable<any> {
   console.log(data);
    return this.http.post<any>(`${environment.apiUrl}/`+ "RestoMenu/GetFoodDetail",data,{responseType:'json'}) ;
  }

  
   public getFoodList(): Observable<FoodDetail[]> {
    // return this.http.get(this.url);
    return this.http.get<FoodDetail[]>(`${environment.apiUrl}/`+ "RestoMenu") ;
  }
  //  public getTagList(): Observable<any> {
  //   // return this.http.get(this.url);
  //   return this.http.get<any>(`${environment.apiUrl}/`+ "RestoMenu") ;
  // }
  getOrderList() {
    return this.http.get(`${environment.apiUrl}/`+"Order/GetOrderList") ;

  }
  getOrderByResto(restaurant:any) {
    return this.http.get(`${environment.apiUrl}/`+"Order/GetOrderByResto/"+`${restaurant}`) ;

  }
  GetOrderByCustomer(CustomeName:any) {
    return this.http.get(`${environment.apiUrl}/`+"Order/GetOrderByCustomer/"+`${CustomeName}`) ;

  }
  SaveResto(data:RestoList) : Observable<any>{
    // console.log(data);- 
return this.http.post<any>(`${environment.apiUrl}/${this.URL}`, data,{responseType:'json'}) ;
  }
  SaveFoodItem(data:FoodDetail) : Observable<any>{
    // console.log(data);- 
    return this.http.post<any>(`${environment.apiUrl}/`+ "RestoMenu/AddFoodItem",data,{responseType:'json'}) ;  }
 
 
  DeleteResto(id:number)
  {
    // return this.http.delete(`${this.url}/${id}`);
    return this.http.delete<RestoList[]>(`${environment.apiUrl}/${this.URL}/${id}`) ;
  }
  DeleteFoodItem(id:number)
  {
    return this.http.delete<any>(`${environment.apiUrl}/`+ "RestoMenu"+`/${id}`) ;
  }

  // RegisterUser(data:any){
  //   return this.http.post(`${environment.apiUrl}/`+"User/RegisterUser", data,{responseType:'text'}) ;

  // }
  // CreateUserCart(data:any){
  //   return this.http.post(`${environment.apiUrl}/`+"Cart", data,{responseType:'text'}) ;

  // }
  DetailToEdit(id:number)  {
  //  return this.http.get(`${this.url}/${id}`)
  return this.http.get(`${environment.apiUrl}/${this.URL}/${id}`) ;
  }
  FoodItemToEdit(id:number):Observable<any>  {
  //  return this.http.get(`${this.url}/${id}`)
  return this.http.get<any>(`${environment.apiUrl}/`+ "RestoMenu"+`/${id}`)
  }
  UpdateResto(id:number,data:RestoList) : Observable<RestoList[]> {
    // return this.http.put(`${this.url}/${id}`,data)
    return this.http.put<RestoList[]>(`${environment.apiUrl}/${this.URL}/${id}`, data) ;
  }
  UpdateFoodItem(id:number,data:FoodDetail) : Observable<any> {
  console.log("this is UpdateFoodItem  "+ id,data)
    return this.http.put<any>(`${environment.apiUrl}/`+ "RestoMenu/UpdateFoodItem/"+ `${id}`,data,{responseType:'json'}) ;
  }

//   AuthUser(data:any){

// return this.http.post(`${environment.apiUrl}/`+"User", data,{responseType:'text'}) 
//   }
public RegisterUser(user:User,name:any,role:any): Observable<any>{

    return this.http.post(`${environment.apiUrl}/`+"User/register?Name="+`${name}`+"&Role="+ `${role}`, user,{responseType:'text'}) ;
}
public LoginUser(user:User): Observable<string>{
    return this.http.post(`${environment.apiUrl}/`+"User/login", user,{responseType:'text'}) ;
}


//   signup(email:string,password : string){
//     this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
// // localStorage.setItem('token','true');
// this.router.navigate(['/OrderList'])


//     },err=>{
// alert(err.message);
// this.router.navigate(['/signup'])
//     }   )
//   }

  // // register
  // register(email:string,password:string){
  //   this.fireauth.createUserWithEmailAndPassword(email,password).then( ()=>{
  //     alert('registration success');
  //     this.router.navigate(['/signup']);
  //   },err=>{
  //     alert(err.message);
  //     this.router.navigate(['/register'])
  //   }
  //   )
  // }

  // signout
  // logout(){
  //   this.fireauth.signOut().then( ()=> {
  //     // localStorage.removeItem('token');
  //     this.router.navigate(['/signup'])
  //   },err=>{
  //     alert(err.message);
     
  //   }
  //   )
  // }




}