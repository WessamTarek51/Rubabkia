import { Category } from './../../_models/category.models';
import { CategoryServiceService } from './../../services/category-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caregory-listing',
  templateUrl: './caregory-listing.component.html',
  styleUrls: ['./caregory-listing.component.css']
})
export class CaregoryListingComponent implements OnInit {
category!:Category[];
dropDownOpen=false;
totalLength:any;
page:number=1;


  constructor(private service:CategoryServiceService) { }

  ngOnInit(): void {
// this.category=this.service.categories;

this.service.getAllcategories().subscribe(
  (res:any)=>{
    this.category = res.data
  },


)

  }

  // $('.categories .btn').click(function(){
  //   console.log('done');
  // });

}
