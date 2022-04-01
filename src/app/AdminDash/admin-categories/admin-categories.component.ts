import { Component, OnInit } from '@angular/core';
import { Category } from './../../_models/category.models';
import { CommonModule } from '@angular/common';
// import { CategoryServiceService } from './../../services/category-service.service';
import { CategoryServiceService } from './../../services/category-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  category!:Category[];
  categoryidd:any;
  constructor(private categoryService:CategoryServiceService, private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getAllcategories().subscribe(
      (res:any)=>{
        this.category = res.data

      },
    )}
   add(){

   }
   del(category:Category){

    this.categoryService.delete(category).subscribe(
      (res)=>{},)

    this.categoryService.getAllcategories().subscribe(
      (res)=>{
        this.category = res.data},)
    
  }
  addEdit(){
    this.router.navigateByUrl('/add-edit-cat');

  }
  onsubmit(){
    
  }
}
