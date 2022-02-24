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
  product!:Product[];
  constructor(private router: Router,private param:ActivatedRoute,private service:ProductServiceService) { }

  ngOnInit(): void {
    this.getId=this.param.snapshot.paramMap.get('id');
    console.log(this.getId,'getId');
    if(this.getId){
       this.product= this.service.products.filter((value)=>{
            return value.id==this.getId;
});
  }
  }


 btnClick() {
        this.router.navigateByUrl('/chat');
};


}
