export class RestoList {
  id!: number;
  name!: string;
  email!: string;
  address!: string;
  favourite: boolean = false;
  imageUrl!: string;
}

export class User {
  Email = '';
  Password = '';
}
export class FoodDetail {
  id!: number;
  price!: number;
  // quantity!: number;
  name!: string;
  restaurant!: string;
  favourite: boolean = false;
  imageUrl!: string;
  CookTime!: string;
  Tag!: string;
}
