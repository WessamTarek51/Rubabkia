import { User } from "./user.models";
import { Category } from "./category.models";



export interface Product{
    id?: number;
    name:string;
    username:string;
    userid:number;
    price: string;
    image: string;
    category_name: string;
    description:string;
    category:Category;
    governate:string;
    user:User;
    isFav:boolean;
}

export interface getAllProductsData{
    data:Product[];

    // name:string;
    // price: number;
    // image?: string;
}


export interface proData{
    data:Product;
  }


  export interface prooData{
    data:[];
  }
