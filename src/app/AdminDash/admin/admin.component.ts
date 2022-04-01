import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { UserServicesService } from 'src/app/services/user-services.service';
import { Adminmessage } from 'src/app/_models/adminmessage.models';
import { User } from 'src/app/_models/user.models';
import { Usermessage } from 'src/app/_models/usermessage.models';
=======
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Category } from 'src/app/_models/category.models';
import { Product } from 'src/app/_models/product.models';
import { User, Userr } from 'src/app/_models/user.models';
>>>>>>> 4adce007a848cebd1dd633c5df599fa7bfce145e
import { AdminCategoriesComponent } from '../admin-categories/admin-categories.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
<<<<<<< HEAD
userr!:User;
counter!:any;
usermessages!:Usermessage[];
  constructor(private  router:Router,private service:UserServicesService) { }


  ngOnInit(): void {
    this.getuser();
    this.service.getallusermessages().subscribe(res=>{
      this.usermessages=res.data
      this.counter=this.usermessages.length
     })
    //  this.service.getalladminmessages().subscribe(res=>{
    //   this.adminmessages=res.data
    //  })

=======
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
 
>>>>>>> 4adce007a848cebd1dd633c5df599fa7bfce145e
  }

  // }



user() {this.router.navigateByUrl('/admin-users'); };
category() {this.router.navigateByUrl('/admin-categories'); };
products() {this.router.navigateByUrl('/admin-products'); };
message() {this.router.navigateByUrl('/admin-messages'); };
<<<<<<< HEAD
getuser(){
  this.service.getData().subscribe(res=>{
    this.userr=res.data;
  });

}
=======
feedbk() {this.router.navigateByUrl('/feedbacks'); };



>>>>>>> 4adce007a848cebd1dd633c5df599fa7bfce145e

}