import { User } from "./user.models";
import { Category } from "./category.models";



export interface Product{
    id?: number;
    name:string;
    price: number;
    image?: string;
    description:string;
    category:Category;
    user:User;
    isFav:boolean;
}

export interface getAllProductsData{
    data:Product[];

    // name:string;
    // price: number;
    // image?: string;
}


