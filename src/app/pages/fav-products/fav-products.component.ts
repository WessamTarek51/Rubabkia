import { ActivatedRoute } from '@angular/router';
import { Product } from './../../_models/product.models';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-products',
  templateUrl: './fav-products.component.html',
  styleUrls: ['./fav-products.component.css']
})
export class FavProductsComponent implements OnInit {
  productData!:Product[];
  senderID :any;

  constructor(public service:ProductServiceService, private param:ActivatedRoute) { }

  ngOnInit(): void {
    this.senderID=this.param.snapshot.paramMap.get('id');
    if(this.senderID){
      this.service.getDataFav(this.senderID).subscribe(
        (res )=>{
console.log(res);
            this.productData=res.data

          // console.log(res.data)

          // console.log(this.categoryId)
        },

      )
}

  }

dataFav(senderID:number){
  this.service.getDataFav(senderID).subscribe(
    (res)=>{

      // this.productData = res.data;
      console.log(res);

    },)
}

}
