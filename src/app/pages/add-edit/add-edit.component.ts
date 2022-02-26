import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category.models';
import { CategoryServiceService } from './../../services/category-service.service';
import { Product } from 'src/app/_models/product.models';
import { ProductServiceService } from './../../services/product-service.service';
import { FormControl ,NgForm } from '@angular/forms';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user.models';



@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  productArray!:Product[];
  categoryArray!: Category[];
  product!: Product;
  productuser!: User;

  constructor(private CategoryService:CategoryServiceService ,
    private productService:ProductServiceService ,private userServer:UserServicesService,private router:Router) 
    { }

  ngOnInit(): void {
    this.getAllCategories();
 this.getAllProducts();

  }
  getAllCategories() {
    this.categoryArray = this.CategoryService.getAllcategories();
  }
  getAllProducts() {
    this.productArray = this.productService.getAllProducts();
  }


 

  addProduct(productform:NgForm){
    const product:Product=productform.value;
    console.log(productform.value)
    this.userServer.addedprudect(product);
    this.router.navigateByUrl('profile');

  }
}
