import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Category } from 'src/app/_models/category.models';
import { Product } from 'src/app/_models/product.models';

@Component({
  selector: 'app-productsofcategory',
  templateUrl: './productsofcategory.component.html',
  styleUrls: ['./productsofcategory.component.css']
})
export class ProductsofcategoryComponent implements OnInit {
   categoryId:any;
  categories:Category[]=[];
  filteredproducts!:Product[]

  constructor(private categoryservice:CategoryServiceService,private productservice:ProductServiceService,
    private param:ActivatedRoute ) {
    this.categories=categoryservice.categories;
   }

  ngOnInit(): void {

    this.categoryId=this.param.snapshot.paramMap.get('id');
    console.log(this.categoryId,'getId');
    if(this.categoryId){
       this.filteredproducts= this.productservice.products.filter((value)=>{
            return value.category.id==this.categoryId;
   
  })

}
  }
  onFav(product:Product){
    this.productservice.favProduct(product);
   }
  
    }


  
  // categories.forEach(item => {
  //   console.log(item);
  //   let filtered = this.products.filter(x => x.category == item);
  //   console.log(filtered);
  // });

    




