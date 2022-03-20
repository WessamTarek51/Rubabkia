import { UserData } from './../../_models/data.model';
import { Product } from '../../_models/product.models';
import { User } from './../../_models/user.models';
import { UserServicesService } from './../../services/user-services.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FeedbackData ,Feedback} from 'src/app/_models/feedback.model';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user!:User;
data!:UserData;
result:any;
showSppiner:boolean = true;
max=5;
dataa!:Feedback[];
isReadonly=true;
userID = parseInt(localStorage.getItem('user_id')!)
sum:any=0;
avg!:number;
token=localStorage.getItem('token');
  constructor(private router: Router,private service:UserServicesService,private toaster:ToastrService) { }

  ngOnInit(): void {
    // this.user=this.service.user;
    this.getuser();
    this.allfeedbacks();
}
  btnClick() {
    this.router.navigateByUrl('/add');
}
btnClickFav(){
  this.router.navigate(['/fav',this.userID]);

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
      console.log(res['data']);

       this.user=res.data;
       this.showSppiner=false;
      //  console.log(this.user.products?.length)
      console.log(this.user.products)

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

allfeedbacks(){

  this.service.gerallfeedData(this.userID).subscribe(res=>{
    this.dataa = res.data
  //   for( var i = 0; i < this.dataa.length; i++ ){
  //     this.sum += parseInt(, 10 ); //don't forget to add the base
  // }

  // var avg = this.sum/this.dataa.length;
  //   console.log(this.data)
   this.sum = this.dataa.reduce((a, b) => a + b.rate, 0);
 this.avg = (this.sum / this.dataa.length) || 0;
 console.log(this.avg)
  });
  }
}
