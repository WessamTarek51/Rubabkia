import { Product ,getAllProductsData } from '../_models/product.models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products:Product[]=[];

  constructor(private HttpClient:HttpClient) { }



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


/////////////////Add product////////////////////
  storeData(data:any):Observable<Product[]>{
    const headers=new  HttpHeaders;
    return this.HttpClient.post<Product[]>('http://127.0.0.1:8000/api/products/',data,{
      headers:headers
    });
  }


  ///////////////get product to edit //////////////////////
  geteditData(id:number){
   return this.HttpClient.get('http://127.0.0.1:8000/api/products/'+id);

 }

  /////////////////Update product////////////////////
  updateData(id:number,data:any):Observable<Product[]>{
    return this.HttpClient.put<Product[]>('http://127.0.0.1:8000/api/products/'+id,data);

  }





}












