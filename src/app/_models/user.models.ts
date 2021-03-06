import { Purchase } from './purchase.models';
import { Product } from "./product.models";
import { Sales } from "./sales.model";

export interface User{


    id: number;

    username:string;
    name:string;
    image?: string;
    email:string;
    phoneNumber:number;
    address:string;
    password:string;
    products?:Product[];
    purchases?:Purchase[];
    sales?:Sales[];
    unseenCountMessages?:number;
    governorate_name:string;
    governorate_id:number;
    gender:string;
    avg:number;
    // email:string;
    // phone_number:number;
    // address:string;
    // password:string;


}

export interface UsersData{
  data:User[];
  productData:Product;
}


export interface Userr{


    id: number;
    name:string;
    image?: string;


}
