import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { CartService } from '../service/cart.service';
import { FoodDetail } from '../shared/models/foodDetail';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  public Tag: string  []= [];
 Food:FoodDetail[]=[];

  constructor(private resto: RestoService, private CartServ: CartService) { }

  ngOnInit(): void {
  
     
   
  }
  // getFoodByTag(data:any){
  //   this.resto.getFoodByTag(data).subscribe((result: FoodDetail[]) => {
  //     this.Food=result ;
  //     console.log("getFoodByTag"+this.Food);
  //     this.CartServ.setFoodItem(this.Food);

  //   })

  // }

  // getTag(){
  //   this.resto.getFoodList().subscribe((result: FoodDetail[]) => {
  //     this.Food=result ;
  //     console.log(result)
   
  //     this.Food.map((a: any) => {
  //      console.log(a.tag)
  //   a.tag=a.tag.split(',');
  //  a.tag.forEach((elem:any) => {
  //   this.Tag.push(elem);
  //  });
      
  //     })
  //     console.log(this.Tag);
  //     this.Tag=[...new Set(this.Tag)];
  //     console.log(this.Tag);
  //   })
  // }


}
