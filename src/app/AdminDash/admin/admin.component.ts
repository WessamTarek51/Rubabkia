import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Adminmessage } from 'src/app/_models/adminmessage.models';
import { User } from 'src/app/_models/user.models';
import { Usermessage } from 'src/app/_models/usermessage.models';
import { AdminCategoriesComponent } from '../admin-categories/admin-categories.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
userr!:User;
counter!:any;
usermessages!:Usermessage[];
  constructor(private  router:Router,private service:UserServicesService) { }


  ngOnInit(): void {
    this.getuser();
    this.service.getallusermessages().subscribe(res=>{
      this.usermessages=res.data
      this.counter=this.usermessages.length
     })
    //  this.service.getalladminmessages().subscribe(res=>{
    //   this.adminmessages=res.data
    //  })

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