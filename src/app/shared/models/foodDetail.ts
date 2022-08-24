export class FoodDetail{
    id!: number;
    price!: number;
    // quantity!: number;
    name!: string;
    restaurant!: string;
    favourite: boolean=false;
    imageUrl!:string;
    CookTime!: string;
    Tag!: string;
  
}
// export class RestoDetail{
//     id!: number;
//     name!: string;
//     location!:string;
//     favourite: boolean=false;
//     star: number=0;
//     tags?: string[];
//     imageUrl!:string;
//     restaurant!: string;
   
// }

// export class CartItem{
//     constructor(Food:FoodDetail){
//         this.Food=Food;

//     }
//     Food: FoodDetail;
//     quantity : number=1;
//     get price(): number{ 
//     return this.Food.price *this.quantity;
// }
// }

// export class Cart{
//     items: CartItem[]=[];

//     get totalPrice(): number{
//         let totalPrice=0;
//         this.items.forEach(item => {
//             totalPrice   += item.price;
//         });
//         return totalPrice;
//     }
// }
