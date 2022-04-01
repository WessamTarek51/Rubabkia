import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Feedback } from 'src/app/_models/feedback.model';

@Component({
  selector: 'app-feedbacks-admin',
  templateUrl: './feedbacks-admin.component.html',
  styleUrls: ['./feedbacks-admin.component.css']
})
export class FeedbacksAdminComponent implements OnInit {

  constructor(private userservice:UserServicesService) { }
  feedback!:Feedback[];
  ngOnInit(): void {
    this.userservice.getAllfeeds().subscribe(
      (res:any)=>{
        console.log(res)
        this.feedback = res.data

      },
    )
  }


  del(feedback:Feedback){

    this.userservice.delete(feedback).subscribe(
      (res)=>{},)

      this.userservice.getAllfeeds().subscribe(
        (res:any)=>{
          console.log(res)
          this.feedback = res.data
  
        },
      )
    
  }
}
