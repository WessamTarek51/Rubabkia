import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { Observable } from 'rxjs';

import { CategoryServiceService } from 'src/app/services/category-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Category,getAllCategoryData } from 'src/app/_models/category.models';
import { Product,getAllProductsData , proData} from 'src/app/_models/product.models';

@Component({
  selector: 'app-productsofcategory',
  templateUrl: './productsofcategory.component.html',
  styleUrls: ['./productsofcategory.component.css']
})
export class ProductsofcategoryComponent implements OnInit {

   categoryId:any;
  categories:Category[]=[];
  filteredproducts!:Product[]
  // dataCat:any;
  // proCat:any;


  constructor(private categoryservice:CategoryServiceService,private productservice:ProductServiceService,
    private param:ActivatedRoute ,private HttpClient:HttpClient ) {
    // this.categories=categoryservice.categories;

   }

  ngOnInit(): void {

    
    this.categoryId=this.param.snapshot.paramMap.get('id');    
    if(this.categoryId){
      this.productservice.getAllProductsiid(this.categoryId).subscribe(
        (res )=>{
          
            this.filteredproducts=res.data
          
          // console.log(res.data)

          // console.log(this.categoryId)
        },
  
      )


}

  }
  onFav(product:Product){
    this.productservice.favProduct(product);
   }

  //  this.param.paramMap.subscribe(params =>{
  //    this.dataCat= params.get("id");
  //   //  console.log(this.dataCat);

  //  });
  //  this.getcategorycat(this.proCat)

//   getcategorycat(id:any){
//     this.categoryservice.getCtId(this.categoryId).subscribe(res=>{
//         // console.log(res);
//          this.proCat=res;
//     });
    
// }

  
    }

    




  
  // categories.forEach(item => {
  //   console.log(item);
  //   let filtered = this.products.filter(x => x.category == item);
  //   console.log(filtered);
  // });

    




