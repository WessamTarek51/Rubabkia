import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category.models';
import { CategoryServiceService } from './../../services/category-service.service';
import { Product } from 'src/app/_models/product.models';
import { ProductServiceService } from './../../services/product-service.service';
import { FormControl ,NgForm } from '@angular/forms';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user.models';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  productArray!:Product[];
  categoryArray!: Category[];
  editMode=false;
  product={} as Product;
  productuser!: User;
 Product_id:any;
 productData!:Product[];
  constructor(private CategoryService:CategoryServiceService ,
    private productService:ProductServiceService ,
    private userServer:UserServicesService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private httpClient: HttpClient,
    private service:UserServicesService) { }

  ngOnInit(): void {


/////////////////return products//////////////////////
  this.productService.getAllProducts().subscribe(
    (res)=>{
      this.productData = res.data;
      console.log(this.productData);
    },

  )
      ///////////return  category //////////////////////

      this.CategoryService.getAllcategories().subscribe(
        (res:any)=>{
          this.categoryArray = res.data

        }
        )
  }
   ///////////Delete Product //////////////////////
  deleteProduct(product:Product){
    this.service.deleteProductOfUser(product).subscribe(res=>{
    });
    this.productService.getAllProducts().subscribe(
      (res)=>{
        this.productData = res.data;
        console.log(this.productData);
      },

    )
  }
}


