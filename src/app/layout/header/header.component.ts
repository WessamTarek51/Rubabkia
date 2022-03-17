import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Notifi } from 'src/app/_models/notiication.models';
import { Acceptedmessage } from 'src/app/_models/acceptedmessage.models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  seller=parseInt(localStorage.getItem('user_id')!);
  notifi!:Notifi[];
  acceptedres!:Acceptedmessage[];
  counter!:number;
  private updateSubscription!: Subscription;
  constructor(private router:Router,private service:UserServicesService) { }
   token:any
   senderID = parseInt(localStorage.getItem('user_id')!)

  ngOnInit(): void {
    // this.service.refreshNeeded.subscribe(()=>{
    //   this.requset(this.seller)
    // })
    this.updateSubscription = interval(3000).subscribe(
      (val) => { this.requset(this.seller)});
    this.requset(this.seller)
  }
  requset(seller:number){
    this.service.request(seller).subscribe(
      (res)=>{

      this.notifi=res.data
      
      this.counter=this.notifi.length
      
      
     },)
     
  }
  acceptresponse(){
    this.service.acceptedmessages().subscribe(res=>{
       this.acceptedres=res.data
       console.log(this.acceptedres)
    })
  }
logout(){

    localStorage.removeItem('token')

  this.router.navigate(['/login'])

}
loggedin(){
  return localStorage.getItem('token')
}


}
