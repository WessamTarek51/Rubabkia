import { Product ,getAllProductsData, proData } from '../_models/product.models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private filterProduct: Product[]=[];
  products:Product[]=
  [
  //   {id:1,
  //   name:"aaaaaaa",
  //   price:20,
  //   image:"https://source.unsplash.com/random/200x200?sig=1",
  //   description:"hhh jgugugb jhugui",
  //   category:{id:1,name:"food",image:"https://source.unsplash.com/random/200x200?sig=2"},
  //   user:{id:1,username:"basma",image:"https://source.unsplash.com/random/200x200?sig=3",email:"wessam@gmail.com",phoneNumber:1124879180,address:"cairo",password:"1234"},
  //   isFav:false,
  // },




  ];


  constructor(private HttpClient:HttpClient) {
    for(let i of this.products){
      this.filterProduct.push(i);
      }
   }



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
//   getProductById(id:number){
//     // return this.products.find(product => product.id===id)
// return this.products.find(Product=>Product.id===id)
//   }


/////////////////Add product////////////////////
  storeData(data:any):Observable<Product[]>{
    console.log(data);
    return this.HttpClient.post<Product[]>('http://127.0.0.1:8000/api/products',data);

  }

  getAllProductsiid(category_id:any):Observable<getAllProductsData> {
    // return this.products;
    return this.HttpClient.get<getAllProductsData>('http://127.0.0.1:8000/api/product/'+category_id);
  }




  geteditData(id:number){
    console.log("done");

   return this.HttpClient.get('http://127.0.0.1:8000/api/products/'+id);

 }

  /////////////////Update product////////////////////
  updateData(id:number,data:any):Observable<Product[]>{

    return this.HttpClient.put<Product[]>('http://127.0.0.1:8000/api/products/'+id,data);

  }


  


}











