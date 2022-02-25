import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category.models';
import { CategoryServiceService } from './../../services/category-service.service';
import { Product } from 'src/app/_models/product.models';
import { ProductServiceService } from './../../services/product-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  productArray!:Product[];
  categoryArray!: Category[];

  constructor(private CategoryService:CategoryServiceService ,
    private productService:ProductServiceService) { }

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

  form=new FormControl({
    productName:new FormControl(),
    productDescription:new FormControl(),
    productprice:new FormControl(),

  });
}
