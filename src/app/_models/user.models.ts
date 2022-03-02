import { Product } from "./product.models";

export interface User{
    id?: number;
    name:string;
     image?: string;
    // email:string;
    // phone_number:number;
    // address:string;
    // password:string;
    product?:Product[];
}

