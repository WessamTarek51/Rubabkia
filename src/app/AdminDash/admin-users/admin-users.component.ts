import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Feedback } from 'src/app/_models/feedback.model';
import { User } from 'src/app/_models/user.models';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  data!:User[];
  dataa!:Feedback[];
  avg:any=[];
  sum!:any;
  max=5;
  isReadonly:boolean=true
  constructor(private service:UserServicesService) { }

  ngOnInit(): void {
    this.allusers()
    }
  allusers(){

    this.service.getallusers().subscribe(res=>{
      this.data = res.data
  console.log(this.data)
  for(const k in this.data){
  this.service.gerallfeedData(this.data[k].id).subscribe(res=>{
    this.dataa = res.data

    this.sum = this.dataa.reduce((a, b) => a + b.rate, 0);
this.data[k].avg = (this.sum / this.dataa.length) || 0;
console.log(this.avg)
console.log(this.dataa)
  });
}
    });
    }
    deleteuser(id:number){
      this.service.deleteUser(id).subscribe(res=>{
          
      })
      this.allusers()
    }

}
