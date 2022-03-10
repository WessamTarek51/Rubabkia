import { Notifications } from './../../_models/notiication.models';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataNotifications } from 'src/app/_models/notiication.models';
import { NofData } from 'src/app/_models/nof.models';
import { Product } from 'src/app/_models/product.models';
import { User } from 'src/app/_models/user.models';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  seller=parseInt(localStorage.getItem('user_id')!);
  nof!:Product[];

  constructor(private service:UserServicesService ) { }

  ngOnInit(): void {

  }
  requset(seller:any){
    this.service.request(seller).subscribe(
      (res)=>{

      this.nof=res.data

      console.log(res)

      },)
  }

}
