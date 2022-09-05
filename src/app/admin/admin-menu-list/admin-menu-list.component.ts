import { Component, OnInit } from '@angular/core';
import { RestoList } from '../../shared/model';
import { RestoService } from '../../shared/service/resto.service';
import { FoodDetail } from '../../shared/model';

@Component({
  selector: 'app-admin-menu-list',
  templateUrl: './admin-menu-list.component.html',
  styleUrls: ['./admin-menu-list.component.css'],
})
export class AdminMenuListComponent implements OnInit {
  public FoodList!: any;

  collection: RestoList[] = [];
  nameSearch: string = '';
  constructor(private resto: RestoService) {}

  ngOnInit(): void {
    this.getMenuList();
  }

  DeleteFood(item: any) {
    this.FoodList.splice(item, 1);
    this.resto.DeleteFoodItem(item).subscribe((result: any) => {
      console.log(result, 'result deleted');
      this.getMenuList();
    });
  }

  DisableFood(id: any) {
    this.resto.SetFoodAvailability(id).subscribe((result: any) => {
      console.log(result, 'result ');
      this.getMenuList();
    });
  }
  getMenuList() {
    this.resto.getFoodList().subscribe((result: FoodDetail[]) => {
      this.FoodList = result;
      console.log('Before type');

      console.log('type', typeof this.FoodList.Available);
      console.log(result);
      // console.log(this.selectedTag)
    });
  }
}
