import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private userServer:UserServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){

    //////////////////////Add ///////////


            this.userServer.storeusermessage(form.value).subscribe(res=>{
              this.router.navigateByUrl('');
              console.log(form.value);

        })

       
      }
}
