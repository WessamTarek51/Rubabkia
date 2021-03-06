import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Feedback } from 'src/app/_models/feedback.model';
import { Product } from './../../_models/product.models';
import { User } from './../../_models/user.models';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  max=5;
  userID =this.param.snapshot.params['id'];
  user = parseInt(localStorage.getItem('user_id')!)
  userData!:User;
  acceptId:any;
  data!:Feedback[];
  sum:any=0;
  avg!:number;
  isReadonly=true;
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
      this.allfeedbacks();
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
              this.router.navigateByUrl('nof/'+this.user);
              console.log(form.value);

        })

        // this.router.navigateByUrl('profile/this.Product_id');
      }
      allfeedbacks(){

        this.userServer.gerallfeedData(this.userID).subscribe(res=>{
          this.data = res.data

          this.sum = this.data.reduce((a, b) => a + b.rate, 0);
          this.avg = (this.sum / this.data.length) || 0;
          console.log(this.avg)
        });
        }

      onclick(){
        this.router.navigateByUrl('nof/'+this.user);
      }
}
