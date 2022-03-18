import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Product } from './../../_models/product.models';
import { User } from './../../_models/user.models';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  userID =this.param.snapshot.params['id'];
  userData!:User;
  constructor(
    private productService:ProductServiceService ,
    private userServer:UserServicesService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private httpClient: HttpClient,
    private FormBuilder:FormBuilder,
    private param:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getSenderById();
  }

  getSenderById(){
    this.userServer.getSenderById(this.userID).subscribe(res=>{
        console.log(res);
         this.userData=res.data;
    });
  }
  onSubmit(form:NgForm){

    //////////////////////Add ///////////
        // if(this.activatedRoute.snapshot.url[0].path=='add'){
    
          // const formm=new FormData();
          //  formm.append('name',form.value.name);
          //  formm.append('price',form.value.price);
          //  formm.append('description',form.value.description);
    
            this.userServer.storefeedData(form.value).subscribe(res=>{
                 console.log(form.value);
    
        })
    
        // this.router.navigateByUrl('profile/this.Product_id');
      }
}
