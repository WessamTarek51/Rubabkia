import { Product } from './../../_models/product.models';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  getId:any;
  Product_id:any;
  product!:Product[];
  constructor(private router: Router,
    private param:ActivatedRoute,
    private service:ProductServiceService,
    private productService:ProductServiceService ,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getId=this.param.snapshot.paramMap.get('id');
    console.log(this.getId,'getId');
    if(this.getId){
       this.product= this.service.products.filter((value)=>{
            return value.id==this.getId;
});
  }
  this.Product_id=this.activatedRoute.snapshot.params['id'];

  this.productService.getDetailesOfProduct(this.Product_id).subscribe(
    (res:any)=>{
        console.log(res.data);
       this.product=res.data;
  
  
    }
    )
  }

 /*  getDetailesOfProduct(){
    this.service.getData().subscribe(res=>{
      this.product=res;
    });
  } */

  


  /* getuser(){
    this.service.getData().subscribe(res=>{
      //let profile=JSON.parse(res.toString())
  
        //  console.log(profile);
        console.log(res);
  
         this.user=res.data;
        //  console.log(this.user.products?.length)
    });
  } */

 btnClick() {
        this.router.navigateByUrl('/chat');
};




}
