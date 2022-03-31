import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
import { User } from 'src/app/_models/user.models';
import { AdminCategoriesComponent } from '../admin-categories/admin-categories.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
userr!:User;
  constructor(private  router:Router,private service:UserServicesService) { }


  ngOnInit(): void {
    this.getuser();
  }



  user() {this.router.navigateByUrl('/admin-users'); };

category() {this.router.navigateByUrl('/admin-categories'); };
products() {this.router.navigateByUrl('/admin-products'); };
message() {this.router.navigateByUrl('/admin-messages'); };
getuser(){
  this.service.getData().subscribe(res=>{
    this.userr=res.data;
  });

}
}