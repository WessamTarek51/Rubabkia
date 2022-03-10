import { Product } from 'src/app/_models/product.models';
import { User } from 'src/app/_models/user.models';
export interface Notifications{
   seller:User;
   buyer:User;
   product:Product;
}
export interface DataNotifications{
   data:[]
   // [
   //    id:number,
   //    username:any,
   //    image:string,
   //    name:string
   // ]
}
