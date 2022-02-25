import { Product } from './../_models/product.models';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products:Product[]=[
    {id:1,
    name:"aaaaaaa",
    price:20,
    image:"https://source.unsplash.com/random/200x200?sig=1",
    description:"hhh jgugugb jhugui",
    category:{id:1,name:"clothes",image:"https://source.unsplash.com/random/200x200?sig=2"},
    user:{id:1,name:"basma"},
  },
  {id:2,
    name:"bbbbbbb",
    price:30,
    image:"https://source.unsplash.com/random/200x200?sig=3",
    description:"hhh jgugugb jhugui",
    category:{id:1,name:"clothes",image:"https://source.unsplash.com/random/200x200?sig=4"},
    user:{id:1,name:"hemmat"},
  },
  {id:3,
    name:"ccccc",
    price:40,
    image:"https://source.unsplash.com/random/200x200?sig=5",
    description:"hhh jgugugb jhugui",
    category:{id:1,name:"clothes",image:"https://source.unsplash.com/random/200x200?sig=6"},
    user:{id:1,name:"menna"},
  },
  {id:4,
    name:"dddddd",
    price:50,
    image:"https://source.unsplash.com/random/200x200?sig=7",
    description:"hhh jgugugb jhugui",
    category:{id:1,name:"clothes",image:"https://source.unsplash.com/random/200x200?sig=8"},
    user:{id:1,name:"shimaaa"},
  },
  {id:5,
    name:"dddddd",
    price:50,
    image:"https://source.unsplash.com/random/200x200?sig=7",
    description:"hhh jgugugb jhugui",
    category:{id:1,name:"clothes",image:"https://source.unsplash.com/random/200x200?sig=8"},
    user:{id:1,name:"shimaaa"},
  },

  ];
  // cartHasBeenChanged: EventEmitter<Product[]>= new EventEmitter<Product[]>();

  constructor() { }

  // addProductToCart(product:Product){
  //   console.log(product);
  //  for(let i of this.products){
  //   if(i.name == product.name){
  //       this.cartHasBeenChanged.emit(this.products);
  //       return
  //   }
  //  }
  //   this.products.push(product);
  //   this.cartHasBeenChanged.emit(this.products);
  // }

  fav:boolean=false;

  favProduct(product:Product){
    for(let i of this.products){
      if(i.id == product.id){
        console.log(product.id);
         this.fav = !this.fav;

    //  this.products.find((product)=>product.name);

  }
}
  }

}











