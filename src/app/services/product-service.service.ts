import { Product ,getAllProductsData } from '../_models/product.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products:Product[]=
  [
    {id:1,
    name:"aaaaaaa",
    price:20,
    image:"https://source.unsplash.com/random/200x200?sig=1",
    description:"hhh jgugugb jhugui",
    category:{id:1,name:"food",image:"https://source.unsplash.com/random/200x200?sig=2"},
    user:{id:1,username:"basma",image:"https://source.unsplash.com/random/200x200?sig=3",email:"wessam@gmail.com",phoneNumber:1124879180,address:"cairo",password:"1234"},
    isFav:false,
  },
  {id:2,
    name:"bbbbbbb",
    price:30,
    image:"https://source.unsplash.com/random/200x200?sig=3",
    description:"hhh jgugugb jhugui",
    category:{id:2,name:"clothing",image:"https://source.unsplash.com/random/200x200?sig=4"},
    user:{id:1,username:"hemmat",image:"https://source.unsplash.com/random/200x200?sig=3",email:"wessam@gmail.com",phoneNumber:1124879180,address:"cairo",password:"1234"},
    isFav:false,

  },
  {id:3,
    name:"ccccc",
    price:40,
    image:"https://source.unsplash.com/random/200x200?sig=5",
    description:"hhh jgugugb jhugui",
    category:{id:3,name:"electric",image:"https://source.unsplash.com/random/200x200?sig=6"},
    user:{id:1,username:"menna",email:"wessam@gmail.com",phoneNumber:1124879180,address:"cairo",password:"1234"},
    isFav:false,

  },
  {id:4,
    name:"dddddd",
    price:50,
    image:"https://source.unsplash.com/random/200x200?sig=7",
    description:"hhh jgugugb jhugui",
    category:{id:1,name:"food",image:"https://source.unsplash.com/random/200x200?sig=8"},
    user:{id:1,username:"shimaaa",email:"wessam@gmail.com",phoneNumber:1124879180,address:"cairo",password:"1234"},
    isFav:false,

  },
  {id:5,
    name:"dddddd",
    price:50,
    image:"https://source.unsplash.com/random/200x200?sig=7",
    description:"hhh jgugugb jhugui",
    category:{id:2,name:"clothing",image:"https://source.unsplash.com/random/200x200?sig=8"},
    user:{id:1,username:"shimaaa",email:"wessam@gmail.com",phoneNumber:1124879180,address:"cairo",password:"1234"},
    isFav:false,

  },

  ];
  // cartHasBeenChanged: EventEmitter<Product[]>= new EventEmitter<Product[]>();

  constructor(private HttpClient:HttpClient) { }

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

  getData(){
    // console.log("done");
    return this.HttpClient.get('http://127.0.0.1:8000/api/products');

  }
  favProduct(product:Product){
    for(let i of this.products){
      if(i.id == product.id){
        console.log(product.id);
        console.log(i.id);

         product.isFav = !product.isFav;

    //  this.products.find((product)=>product.name);

  }
}
  }

  getAllProducts():Observable<getAllProductsData> {
    //
    return this.HttpClient.get<getAllProductsData>('http://127.0.0.1:8000/api/products');
  }
  getProductById(id:number){
    // return this.products.find(product => product.id===id)
return this.products.find(Product=>Product.id===id)
  }
  storeData(data:any):Observable<Product[]>{
    console.log(data);
    return this.HttpClient.post<Product[]>('http://127.0.0.1:8000/api/products',data);

  }
}











