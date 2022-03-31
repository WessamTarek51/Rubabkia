import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Category } from 'src/app/_models/category.models';
import { Product } from 'src/app/_models/product.models';
import { User, Userr } from 'src/app/_models/user.models';
import { AdminCategoriesComponent } from '../admin-categories/admin-categories.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  categorys!:Category[]
  userr!:User[]
  product!:Product[]
  counter!:number
  counterusers!:number
  counterproductss!:number
  constructor(private  router:Router ,private productService:ProductServiceService , private categoryService:CategoryServiceService,private userservice:UserServicesService) { }


  ngOnInit(): void {
    
    this.userservice.getAlluserssad().subscribe(
      (res:any)=>{
        this.userr = res.data
        this.counterusers=this.userr.length

      },
    )

    this.categoryService.getAllcategories().subscribe(
      (res)=>{
        this.categorys = res.data
        this.counter=this.categorys.length

      },
    )
    this.productService.getAllProducts().subscribe(
      (res)=>{
  
        this.product= res.data
        this.counterproductss=this.product.length

        // this.productData = res.data;
  
      },)
 
  }

  // }



user() {this.router.navigateByUrl('/admin-users'); };
category() {this.router.navigateByUrl('/admin-categories'); };
products() {this.router.navigateByUrl('/admin-products'); };
message() {this.router.navigateByUrl('/admin-messages'); };
feedbk() {this.router.navigateByUrl('/feedbacks'); };




}