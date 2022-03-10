import { Product } from 'src/app/_models/product.models';
import { User } from 'src/app/_models/user.models';
export interface Notifi{
  id_not:number;
 buyer_id:number;
 buyer_name:User;
 product_image:string;
 product_name:string;
}

