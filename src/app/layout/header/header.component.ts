import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Notifi } from 'src/app/_models/notiication.models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  seller=parseInt(localStorage.getItem('user_id')!);
  notifi!:Notifi[];
  counter!:number;
  constructor(private router:Router,private service:UserServicesService) { }
   token:any
   senderID = parseInt(localStorage.getItem('user_id')!)

  ngOnInit(): void {
    this.service.refreshNeeded.subscribe(()=>{
      this.requset(this.seller)
    })
   
  }
  requset(seller:number){
    this.service.request(seller).subscribe(
      (res)=>{

      this.notifi=res.data
      console.log(res.data)
      this.counter=this.notifi.length
      
     },)
     
  }
logout(){

    localStorage.removeItem('token')

  this.router.navigate(['/login'])

}
loggedin(){
  return localStorage.getItem('token')
}


}
