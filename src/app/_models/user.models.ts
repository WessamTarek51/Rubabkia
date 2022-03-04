import { Purchase } from './purchase.models';
import { Product } from "./product.models";

export interface User{
    id?: number;
    username:string;
    image?: string;
    email:string;
    phoneNumber:number;
    address:string;
    password:string;
    products?:Product[];
    purchases?:Purchase[];
    // email:string;
    // phone_number:number;
    // address:string;
    // password:string;
    product?:Product[];
}

