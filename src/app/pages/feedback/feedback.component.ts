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
  acceptId:any;
  constructor(
    private productService:ProductServiceService ,
    private userServer:UserServicesService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private httpClient: HttpClient,
    private FormBuilder:FormBuilder,
    private param:ActivatedRoute
    // private router:Router
  ) { }

  ngOnInit(): void {
    this.getSenderById();
    this.activatedRoute.queryParams.subscribe(param=>{
      this.acceptId=param['accept']
      console.log(this.acceptId)
      })
  }

  getSenderById(){
    console.log(this.userID)
    this.userServer.getSenderById(this.userID).subscribe(res=>{
        console.log(res);
         this.userData=res.data;
    });
  }

  changFav(product:Product){
    console.log(product.id);
    console.log(product.isFav);

      if(product.isFav==true){
        this.productService.deleteFavOfUser(product).subscribe(res=>{
          console.log (res.toString);

        });


      }
       else{
        this.productService.addFavProduct(product).subscribe(res=>{
          console.log (res.toString);

        });

       }
       product.isFav=!product.isFav


      }
      AddPruchases(product:Product){
        this.productService.AddPurchases (product).subscribe(res=>{})
     }


    // buyProduct(product:Product){

    //   this.productService.buyProduct(product).subscribe(res=>{
    //   });
      // }
    

  onSubmit(form:NgForm){

    //////////////////////Add ///////////

    
            this.userServer.storefeedData(form.value,this.acceptId).subscribe(res=>{
              this.router.navigateByUrl('nof/,this.userID');
              console.log(form.value);
    
        })
    
        // this.router.navigateByUrl('profile/this.Product_id');
      }

      onclick(){
        this.router.navigateByUrl('nof/,this.userID');
      }
}
