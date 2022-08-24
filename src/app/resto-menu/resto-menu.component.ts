import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodDetail} from 'src/app/shared/models/foodDetail';
import { RestoService } from '../resto.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-resto-menu',
  templateUrl: './resto-menu.component.html',
  styleUrls: ['./resto-menu.component.css']
})
export class RestoMenuComponent implements OnInit {
  restaurant:any;
  name:any=[];
  Detail: FoodDetail[] = [];
  constructor( private CartServ: CartService, private resto: RestoService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('this is restomenu');
    this.restaurant= this.router.snapshot.params['name']
    this.resto.getRestoMenu(this.restaurant).subscribe((result: FoodDetail[]) => {
      console.log(result);
      this.Detail = result;
    })


  }

 

}
