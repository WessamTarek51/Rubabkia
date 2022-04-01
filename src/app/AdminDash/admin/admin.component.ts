import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

import { Adminmessage } from 'src/app/_models/adminmessage.models';
import { Usermessage } from 'src/app/_models/usermessage.models';
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
userr!:User;
counter!:any;
usermessages!:Usermessage[];
private updateSubscription!: Subscription;




    //  this.service.getalladminmessages().subscribe(res=>{
    //   this.adminmessages=res.data
    //  })

  categorys!:Category[]
  users!:User[]
  product!:Product[]
  counterr!:number
  counterusers!:number
  counterproductss!:number
  constructor(private  router:Router ,private productService:ProductServiceService , private categoryService:CategoryServiceService,private userservice:UserServicesService) { }


  ngOnInit(): void {
    this.getuser();
    this.updateSubscription = interval(3000).subscribe(
      (val) => {  this.userservice.getallusermessages().subscribe(res=>{
        this.usermessages=res.data
        this.counter=this.usermessages.length;
       }
    )});
    this.userservice.getallusermessages().subscribe(res=>{
      this.usermessages=res.data
      this.counter=this.usermessages.length;
     }
  )



    this.userservice.getAlluserssad().subscribe(
      (res:any)=>{
        this.users = res.data
        this.counterusers=this.users.length

      },

    )

    this.categoryService.getAllcategories().subscribe(
      (res)=>{
        this.categorys = res.data
        this.counterr=this.categorys.length

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
getuser(){
  this.userservice.getData().subscribe(res=>{
    this.userr=res.data;
  });

}
feedbk() {this.router.navigateByUrl('/feedbacks'); };




}
