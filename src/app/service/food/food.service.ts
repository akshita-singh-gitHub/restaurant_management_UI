import { Injectable } from '@angular/core';
import { FoodDetail, RestoDetail } from 'src/app/shared/models/foodDetail';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  
  url = 'http://localhost:3000/Orders';
  private URL ="Restaurant"

  constructor(private http: HttpClient) { }

  // FoodDetails(id:any){
  //   return this.http.get<FoodDetail[]>(`${environment.apiUrl}/`+ "RestoMenu"+`/${id}`) ;
  //  }

   SaveOrder(OrderDetails:any){
    // console.log(data);
// return this.http.post(this.url,OrderDetails);
return this.http.post(`${environment.apiUrl}/`+"Order", OrderDetails);

  }

  getImages():FoodDetail[]{
    return [ ]
  }

  
  
}
