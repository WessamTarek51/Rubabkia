import { UserData } from './../../_models/data.model';
import { Product } from '../../_models/product.models';
import { User } from './../../_models/user.models';
import { UserServicesService } from './../../services/user-services.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user!:User;
data!:UserData;
result:any;

token=localStorage.getItem('token');
  constructor(private router: Router,private service:UserServicesService,private toaster:ToastrService) { }

  ngOnInit(): void {
    // this.user=this.service.user;
    this.getuser();
     
}
  btnClick() {
    this.router.navigateByUrl('/add');
}
btnClickFav(){
  this.router.navigateByUrl('/fav');

}
deleteProduct(product:Product){
  // this.service.deleteProductOfUser(product);
  // console.log(this.user.products?.length);
  this.service.deleteProductOfUser(product).subscribe(res=>{
this.getuser();
  });

}
getuser(){
  this.service.getData().subscribe(res=>{
    //let profile=JSON.parse(res.toString())

      //  console.log(profile);
      console.log(res);

       this.user=res.data;
      //  console.log(this.user.products?.length)
  });
}
verify(){
  this.service.verifyemail(this.token).subscribe(res=>{
    this.result=res;
    console.log(this.result)
    if(this.result.status === 1){
    this.toaster.success(JSON.stringify(this.result.message),JSON.stringify(this.result.code),{
      timeOut:2000,
      progressBar:true
    });
    
  }
  else{
    this.toaster.info(JSON.stringify(this.result.message),JSON.stringify(this.result.code),{
      timeOut:2000,
      progressBar:true
    });
   
  }
 

  })
}
  

}
