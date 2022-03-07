import { Product,getAllProductsData } from './../../_models/product.models';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { UserData } from 'src/app/_models/data.model';
import { User } from 'src/app/_models/user.models';
import { Purchase } from './../../_models/purchase.models';
import { getAllCategoryData } from 'src/app/_models/category.models';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})

export class ProductListingComponent implements OnInit {
  product = {} as Product;
productData!:Product[];

fav:boolean=false;
// Purchasedata:getAllCategoryData | undefined;
Purchasedata!:Product[];
totalLength:any;
page:number=1;
Purchase={} as Product;
dataCat:any;
user!:User;
data!:UserData;
searchText!:string;
Product_id: any;

search(){

  this.service.getAllProducts().subscribe(
    (res)=>{

      this.productData= res.data.filter(value => value.name.match(this.searchText)  || value.price <= this.searchText )
      // this.productData = res.data;

    },)
  console.log(this.searchText);
  console.log(this.searchText);
}
searchas(){
  this.service.getAllProducts().subscribe(
    (res)=>{

      this.productData= res.data
      // this.productData = res.data;

    },

  )
}


  constructor(public service:ProductServiceService ,
    private userService:UserServicesService,
    private activatedRoute:ActivatedRoute,) { }
  // productselected!:number;
  ngOnInit(): void {

    this.service.getAllProducts().subscribe(
      (res)=>{
        this.productData = res.data;
      },

    )
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


///////////////////delete product to add it in purchases/////////////
deleteProduct(product:Product){
  this.userService.deleteProductOfUser(product).subscribe(res=>{
   console.log(product);
 this.service.AddPurchases (product).subscribe(res=>{
 });

})

}

  addfav(id:any){
    this.service.getFavProduct(id).subscribe(
      (res)=>{
console.log(res);
      },

    )

  }


}
