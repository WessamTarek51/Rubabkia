import { Product } from 'src/app/_models/product.models';
import { User } from 'src/app/_models/user.models';
export interface Acceptedmessage{
id:number;
seller_name:string;
buyer_name:string;
seller_id:number;
buyer_id:number;
productname:string;
productimage:string;
message:string;

}

export interface AcceptedmessageData{
   data: Acceptedmessage[];
  }