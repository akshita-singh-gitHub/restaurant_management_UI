import { Component, OnInit } from '@angular/core';
import { RestoList } from '../model';
import { RestoService } from '../resto.service';
import { FoodDetail } from '../shared/models/foodDetail';

@Component({
  selector: 'app-admin-resto-list',
  templateUrl: './admin-resto-list.component.html',
  styleUrls: ['./admin-resto-list.component.css']
})
export class AdminRestoListComponent implements OnInit {
  public FoodList!:any;

  collection: RestoList[] = [];
  nameSearch:string=''
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
    this.getRestoList();

  
  }

  getRestoList(){
    this.resto.getList().subscribe((result: RestoList[]) => {
      // console.log(result);
      this.collection = result;
    })
  }
  
  Delete(item:any){
    this.collection.splice(item,1)
    this.resto.DeleteResto(item).subscribe((result )=>{
      console.log(result ,'result deleted');
      this.getRestoList();
    })
          

  }
  DisableFood(id:any){
    this.resto.SetRestoAvailability(id).subscribe((result:any )=>{
      console.log(result ,'result ');
      
    })
          

  }

}
