import { Component, OnInit } from '@angular/core';
import { RestoList } from '../../model';

import { RestoService } from '../../service/resto.service';
// import { UpdateRestoComponent } from '../update-resto/update-resto.component';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css'],
})
export class ListRestoComponent implements OnInit {
  collection: RestoList[] = [];
  nameSearch: string = '';
  constructor(private resto: RestoService) {}

  ngOnInit(): void {
    this.resto.getList().subscribe((result: RestoList[]) => {
      // console.log(result);
      this.collection = result;
    });
  }
}
