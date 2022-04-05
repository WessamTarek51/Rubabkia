import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { FormControl ,NgForm } from '@angular/forms';
import { Category } from 'src/app/_models/category.models';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {
  editMode=false;
  cat_id:any;
  category={} as Category;
  constructor(
    private CategoryService:CategoryServiceService ,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.url[0].path);

    if(this.activatedRoute.snapshot.url[0].path=='editcat'){
      this.editMode=!this.editMode
    }

    this.cat_id=this.activatedRoute.snapshot.params['id'];

this.CategoryService.getCtId(this.cat_id).subscribe(
  (res:any)=>{
      console.log(res.data);
     this.category=res.data;


  } )

  }
  onsubmit(form:NgForm){

    ////Add ///
        if(this.activatedRoute.snapshot.url[0].path=='add-edit-cat'){
    
          const formm=new FormData();
           formm.append('id',form.value.id);
           formm.append('name',form.value.name);
           formm.append('image',form.value.image);
    
            this.CategoryService.addcategory(formm).subscribe(res=>{
                 console.log('done');
    
        })
      this.router.navigateByUrl('/admin-categories');

      }

      // }
  /////edit//
        else if(this.activatedRoute.snapshot.url[0].path=='editcat'){

          
          const formms=new FormData();
        
          // formms.append('id',form.value.id);
          formms.append('name',form.value.name);
          formms.append('image',form.value.image);

          this.CategoryService.updatecat(this.cat_id,formms).subscribe(res=>{
          console.log('done')
          });
    
          this.router.navigateByUrl('/admin-categories');
        }
    
    }
    
    
}
