import { User } from "./user.models";
import { Category } from "./category.models";



export interface Product{
    id?: number;
    name:string;
    price: number;
    image?: any;
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

// export interface getAllProductsDatacategory{
//     // data:[];
//     id: number;
//     name:string;
//     price: number;
//     image?: string;
//     category_id: number;
//     category_name:string;


// }
export interface proData{
    data:Product;
  }
  


