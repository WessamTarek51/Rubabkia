import { Product,getAllProductsData } from './../../_models/product.models';
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
// listproducts!:Product[];
fav:boolean=false;

totalLength:any;
page:number=1;

dataCat:any;

searchText!:string;
search(){
  
  this.service.getAllProducts().subscribe(
    (res)=>{
      
      this.productData= res.data.filter(value => value.name === this.searchText)
      // this.productData = res.data;
      
    },

  )
  // debugger
  console.log(this.searchText);
  console.log(this.searchText);
}

// productDataa=[
//   {product: 'shows'},
//   {product: 'dress'},
//   {product: 'haaaat'},
//   {product: 'accesory'}
// ];

  constructor(public service:ProductServiceService) { }
  // productselected!:number;
  ngOnInit(): void {
    
    this.service.getAllProducts().subscribe(
      (res)=>{
        this.productData = res.data;
      },

    )

  //  this.productData=this.service.products;

    // this.getproduct();

  }

  onFav(product:Product){
   this.service.favProduct(product);
  }
  getproduct(){
    this.service.getData().subscribe(res=>{
      //let profile=JSON.parse(res.toString())
  
        //  console.log(profile);
        console.log(res);
  
        //  this.product=res.data;
         console.log(this.product);

    });
  }


  //   getproductcat(){
  //     this.service.getData().subscribe(res=>{

  //         console.log(res);
    
  //          this.dataCat=res;
           
  //     });
  // }


}
