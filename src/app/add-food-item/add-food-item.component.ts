import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})
export class AddFoodItemComponent implements OnInit {

  // @Input() ListItem?: RestoList;
  componentname="user"
  
  alert:boolean=false;
    constructor(private Resto: RestoService) { }
  
    FoodItemForm = new FormGroup({
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
     
  
    }
  
    CollectFood() {
      // console.log(this.FoodItemForm.value);
  
      this.Resto.SaveFoodItem(this.FoodItemForm.value).subscribe((result:any)=>{
        console.log(result)
        this.alert=true
        this.FoodItemForm.reset({})
      })
       
    }
  
    CloseAlert()
    {
      this.alert=false
    }
     get name(){
      return this.FoodItemForm.get('name');
    }
     get restaurant(){
      return this.FoodItemForm.get('restaurant');
    }
     get price(){
      return this.FoodItemForm.get('price');
    }
  

}
