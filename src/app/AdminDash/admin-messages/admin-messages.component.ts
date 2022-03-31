import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Usermessage } from 'src/app/_models/usermessage.models';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {
 data!:Usermessage[];
  constructor(private service:UserServicesService) { }

  ngOnInit(): void {
    this.service.getallusermessages().subscribe(res=>{
   this.data=res.data
    })
  }
  onSubmit(form:NgForm,id:number){

    //////////////////////Add ///////////


  this.service.storeadminmessage(form.value,id).subscribe(res=>{
              console.log(form.value);
            })
  this.service.getallusermessages().subscribe(res=>{
          this.data=res.data
           })

       
      }

}
