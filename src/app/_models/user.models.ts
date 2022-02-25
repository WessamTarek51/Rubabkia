import { Product } from "./product.models";

export interface User{
    id?: number;
    name:string;
     image?: string;
    // email:string;
    // phoneNumber:number;
    // address:string;
    // password:string;
    product?:Product[];
}

