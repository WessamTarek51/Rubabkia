import { Product } from '../../_models/product.models';
import { User } from './../../_models/user.models';
import { UserServicesService } from './../../services/user-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user!:User;
  constructor(private router: Router,private service:UserServicesService) { }

  ngOnInit(): void {
    this.user=this.service.user;

  }
  btnClick() {
    this.router.navigateByUrl('/add');
}
btnClickFav(){
  this.router.navigateByUrl('/fav');

}
deleteProduct(product:Product){
  this.service.deleteProductOfUser(product);
}
}
