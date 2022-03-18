import { UserServicesService } from 'src/app/services/user-services.service';
import { Component, OnInit } from '@angular/core';
import { NotificationData } from 'src/app/_models/nof.models';
import { Notifi } from 'src/app/_models/notiication.models';
import { Acceptedmessage } from 'src/app/_models/acceptedmessage.models';
import { Rejectedmessage } from 'src/app/_models/rejectedmessage.models';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  seller=parseInt(localStorage.getItem('user_id')!);
  data!:NotificationData;
  notifi!:Notifi[];
  acceptedres!:Acceptedmessage[];
  rejectedres!:Rejectedmessage[];
  constructor(private service:UserServicesService ) { }

  ngOnInit(): void {
    this.service.refreshNeeded.subscribe(()=>{
      this.requset(this.seller)
      
    })
  this.requset(this.seller)
   this.acceptresponse()
   this.rejectresponse()
  }
  // requests
  requset(seller:any){
    this.service.request(seller).subscribe(
      (res)=>{

      this.notifi=res.data
      // console.log(res.data)
      console.log(this.notifi)
      // console.log(this.notifi[0].id)
      console.log
      },)
  }
  // acceptedresponse
  acceptresponse(){
    this.service.acceptedmessages().subscribe(res=>{
       this.acceptedres=res.data
       console.log(this.acceptedres)
    })
  }
  accept(nof:Notifi,seller:number){

    this.service.accept(nof).subscribe(
      (res)=>{
        console.log(res)
      },)
      this.requset(seller);
      // this.service.acceptmessage(nof).subscribe(res=>{
      //   console.log(res)
      // })
  }
  reject(nof:Notifi,id:number,seller:number){
    this.service.rejectmessage(nof).subscribe(res=>{
      console.log(res)
    })
    // this.service.reject(id).subscribe(
    //   (res)=>{
    //   },)
      this.requset(seller);
    
  }

  rejectresponse(){
    this.service.rejectedmessages().subscribe(res=>{
       this.rejectedres=res.data
       console.log(this.rejectedres)
    })
  }

    ok(id:number){
    this.service.ok(id).subscribe(
      (res)=>{
      },)
      this.acceptresponse();

  }
  okay(id:number){
    this.service.okay(id).subscribe(
      (res)=>{
      },)
      this.rejectresponse();

  }
  }


