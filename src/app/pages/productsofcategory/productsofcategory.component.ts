import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { CategoryServiceService } from 'src/app/services/category-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Category,getAllCategoryData } from 'src/app/_models/category.models';
import { Product,getAllProductsData , proData} from 'src/app/_models/product.models';

@Component({
  selector: 'app-productsofcategory',
  templateUrl: './productsofcategory.component.html',
  styleUrls: ['./productsofcategory.component.css']
})
export class ProductsofcategoryComponent implements OnInit {
   token=localStorage.getItem('token');
   categoryId:any;
  categories:Category[]=[];
  filteredproducts!:Product[]
  // dataCat:any;
  prot!:Product[]


  constructor(private categoryservice:CategoryServiceService,private productservice:ProductServiceService,
    private param:ActivatedRoute ,private HttpClient:HttpClient,private toaster:ToastrService ,private router:Router ,private userservice:UserServicesService) {
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
  changFav(product:Product){
    if(!this.token){
      this.router.navigate(['login'])
    }
    else{
    console.log(product.id);
    console.log(product.isFav);

      if(product.isFav==true){
        this.productservice.deleteFavOfUser(product).subscribe(res=>{
          console.log (res.toString);

        });


      }
       else{
        this.productservice.addFavProduct(product).subscribe(res=>{
          console.log (res.toString);

        });

       }
       product.isFav=!product.isFav


      }

    }
    AddPruchases(product:Product){
      this.productservice.AddPurchases (product).subscribe(res=>{})
   }
  
  
  buyProduct(product:Product){
    if(!this.token){
      this.router.navigate(['login'])
    }
    else{
    this.userservice.buyProduct(product).subscribe(res=>{
      this.toaster.success(JSON.stringify(res.message),JSON.stringify(res.code),{
        timeOut:2000,
        progressBar:true
      });
    });
  }
    }

    hhh(){
      this.productservice.getAllProducts().subscribe(
        (res)=>{
       this.prot=res.data
        })
    }
  }
  // categories.forEach(item => {
  //   console.log(item);
  //   let filtered = this.products.filter(x => x.category == item);
  //   console.log(filtered);
  // });






