import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoList } from '../../model';
import { RestoService } from '../../resto.service';
import { FoodDetail } from '../../shared/models/foodDetail';

@Component({
  selector: 'app-update-food-item',
  templateUrl: './update-food-item.component.html',
  styleUrls: ['./update-food-item.component.css']
})
export class UpdateFoodItemComponent implements OnInit {

  @Input() ListItem?: FoodDetail;

  alert: boolean=false;
    constructor(private router:ActivatedRoute,private resto: RestoService) { }
    EditFoodItem = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]),
      restaurant: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      cookTime: new FormControl('',[Validators.required]),
      imageUrl: new FormControl('',[Validators.required]),
      tag: new FormControl('',[Validators.required]),
      available: new FormControl('true'),
      favourite: new FormControl('true'),
    })
  
    
    ngOnInit(): void {
  
  console.log(this.router.snapshot.params['id']);
  this.resto.FoodItemToEdit(this.router.snapshot.params['id']).subscribe((result:any)=>{
    console.log("after FoodItemToEdit "+ result);
    this.EditFoodItem = new FormGroup({
      id: new FormControl(result['id']),
      name: new FormControl(result['name']),
      restaurant: new FormControl(result['restaurant']),
      price: new FormControl(result['price']),
      cookTime: new FormControl(result['cookTime']),
      imageUrl: new FormControl(result['imageUrl']),
      tag: new FormControl(result['tag']),
      available: new FormControl(result['available']),
      favourite: new FormControl(result['favourite']),
    })
  
  })
    }
    CollectFoodData(){
      // console.log(this.EditForm.value);
      this.resto.UpdateFoodItem(this.router.snapshot.params['id'],this.EditFoodItem.value).subscribe((result:any)=>{
  console.log(result);
      })
      this.alert=true;
  
    }
    CloseAlert(){
      this.alert=false;
      this.EditFoodItem.reset({});
    }
    get name(){
      return this.EditFoodItem.get('name');
    }
     get restaurant(){
      return this.EditFoodItem.get('restaurant');
    }
     get price(){
      return this.EditFoodItem.get('price');
    }

}
