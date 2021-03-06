import { Product } from 'src/app/_models/product.models';
import { User } from 'src/app/_models/user.models';
export interface Feedback{
id:number;
seller_name:string;
seller_image:string;
buyer_name:string;
seller_id:number;
buyer_id:number;
productname:string;
productimage:string;
image:string;
message:string;
rate:number;
}

export interface FeedbackData{
   data: Feedback[];
  }