import { Product } from './../../_models/product.models';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})

export class ProductListingComponent implements OnInit {
  product = {} as Product;
productData!:Product[];
fav:boolean=false;

totalLength:any;
page:number=1;

  constructor(public service:ProductServiceService) { }

  ngOnInit(): void {
   this.productData=this.service.products;

  }
  // onItemAdded(){
  //   this.service.addProductToCart(this.product);

  // }
  onFav(product:Product){
   this.service.favProduct(product);
  }






}
