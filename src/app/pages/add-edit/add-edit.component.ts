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
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  productArray!:Product[];
  categoryArray!: Category[];
  editMode=false;
  product={} as Product;
  productuser!: User;
  Product_id:any;
  editproduct:any;
  constructor(private CategoryService:CategoryServiceService ,
    private productService:ProductServiceService ,
    private userServer:UserServicesService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private httpClient: HttpClient,
    )
    { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    console.log(this.activatedRoute.snapshot.url[0].path);

    if(this.activatedRoute.snapshot.url[0].path=='edit'){
      this.editMode=!this.editMode
    }



/////////////////return product by id  to edit in DB//////////////////////
this.Product_id=this.activatedRoute.snapshot.params['id'];

this.productService.geteditData(this.Product_id).subscribe(
  (res:any)=>{
      console.log(res.data);
     this.product=res.data;


  }
  )

      ///////////to select category //////////////////////

      this.CategoryService.getAllcategories().subscribe(
        (res:any)=>{
          this.categoryArray = res.data

        }
        )
  }





  ///////////////// (onSubmit) add/update product in DB   //////////////////////
  onSubmit(form:NgForm){
    if(this.activatedRoute.snapshot.url[0].path=='add'){

        this.productService.storeData(form.value).subscribe(res=>{
            // console.log(form.value);

    })
    this.router.navigateByUrl('profile/this.Product_id');
  }
    else if(this.activatedRoute.snapshot.url[0].path=='edit'){
      this.productService.updateData(this.Product_id,this.product).subscribe(res=>{
        console.log(res);
        this.router.navigateByUrl('profile/this.Product_id');
})}
    }

  }
