import { Product } from './../_models/product.models';
import { User } from './../_models/user.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  user:User=
    {id:1,
    name:"basam",
    image:"https://source.unsplash.com/random/200x200?sig=1",
    product:[
    {id:1,
      name:"aaaaaaa",
      price:20,
      image:"https://source.unsplash.com/random/200x200?sig=3",
      description:"hhh jgugugb jhugui",
      category:{id:1,name:"clothes",image:"https://source.unsplash.com/random/200x200?sig=2"},
      user:{id:1,name:"basma",image:"https://source.unsplash.com/random/200x200?sig=3"},
      isFav:false,},
      {id:2,
      name:"bbbbbb",
      price:30,
      image:"https://source.unsplash.com/random/200x200?sig=2",
      description:"hhh jgugugb jhugui",
      category:{id:1,name:"clothes",image:"https://source.unsplash.com/random/200x200?sig=2"},
      user:{id:1,name:"basma",image:"https://source.unsplash.com/random/200x200?sig=3"},
      isFav:false,}]
  };

  constructor() { }
  deleteProductOfUser(product:Product){
    this.user.product?.splice(this.user.product.indexOf(product),1);
  }
  addedprudect(product:Product){
    console.log(product.name);
    this.user.product?.push(product);
    
  
  }
}
