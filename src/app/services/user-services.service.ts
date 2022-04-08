import { Observable, Subject, tap } from 'rxjs';
import { UserData } from './../_models/data.model';


// import { Product } from './../_models/product.models';

import { User, UsersData } from './../_models/user.models';
import { Injectable } from '@angular/core';
import { Product } from '../_models/product.models';
import { environment } from 'src/environments/environment';
// import { environment } from 'src/environments/environment.prod';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { NotificationData } from '../_models/nof.models';
import { Notifi } from '../_models/notiication.models';
import { AcceptedmessageData } from '../_models/acceptedmessage.models';
import { Acceptedmessage } from '../_models/acceptedmessage.models';
import { Feedback ,FeedbackData} from '../_models/feedback.model';
import { RejectedmessageData } from '../_models/rejectedmessage.models';
import { Rejectedmessage } from '../_models/rejectedmessage.models';
import { Governorate } from '../_models/governorate.models';
import { Usermessage, UsermessageData } from '../_models/usermessage.models';
import { Adminmessage,AdminmessageData } from '../_models/adminmessage.models';



@Injectable({
  providedIn: 'root'
})



export class UserServicesService {

  // user:User=
  //   {id:1,
  //   name:"basam",
  //   image:"https://source.unsplash.com/random/200x200?sig=1",
  //   product:[
  //   {id:1,
  //     name:"aaaaaaa",
  //     price:20,
  //     image:"https://source.unsplash.com/random/200x200?sig=3",
  //     description:"hhh jgugugb jhugui",
  //     category:{id:1,name:"clothes",image:"https://source.unsplash.com/random/200x200?sig=2"},
  //     user:{id:1,name:"basma",image:"https://source.unsplash.com/random/200x200?sig=3"},
  //     isFav:false,},
  //     {id:2,
  //     name:"bbbbbb",
  //     price:30,
  //     image:"https://source.unsplash.com/random/200x200?sig=2",
  //     description:"hhh jgugugb jhugui",
  //     category:{id:1,name:"clothes",image:"https://source.unsplash.com/random/200x200?sig=2"},
  //     user:{id:1,name:"basma",image:"https://source.unsplash.com/random/200x200?sig=3"},
  //     isFav:false,}]
  // };


  constructor(private http:HttpClient) { }
  private _refreshNeeded=new Subject<void>();
  get refreshNeeded(){
       return this._refreshNeeded
  }
  deleteProductOfUser(product:Product){
    const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

    return this.http.delete('https://rubabikia-project.herokuapp.com/api/deleteproduct/'+product.id,{headers});
  }
//  addedprudect(product:Product){
//     console.log(product.name);
//    this.user.product?.push(product);
// }
authToken: any;
  getData():Observable<UserData>{
    // this.loadToken();
    const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

    return this.http.get<UserData>('https://rubabikia-project.herokuapp.com/api/profile',{ headers});
  }

  // public loadToken() {
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  // }



    registeruser(data:any){
    const headers=new HttpHeaders()
  return this.http.post('https://rubabikia-project.herokuapp.com/api/register',data,{
    headers:headers
     });
    }
    loginuser(data:any){
      return this.http.post('https://rubabikia-project.herokuapp.com/api/login',data)
        }
    forgetpass(email:string){
      return this.http.post('https://rubabikia-project.herokuapp.com/api/forget',{email:email})
    }
    resetpass(token:any,password:string,confirmpass:string){
      const data={
        token:token,
        password:password,
        confirmpassword:confirmpass
      }

      return this.http.post('https://rubabikia-project.herokuapp.com/api/reset',data)
    }

    verifyemail(token:any):Observable<any>{
     const header = new HttpHeaders({'Content-Type':'application/json','Authorization': 'Bearer ' + token})
      return this.http.post('https://rubabikia-project.herokuapp.com/api/email/verification-notification',null,{headers:header})
    }
    completeverify(token:any,id:any,hash:any):Observable<any>{
      const header = new HttpHeaders({'Content-Type':'application/json','Authorization': 'Bearer ' + token})

       return this.http.get('https://rubabikia-project.herokuapp.com/api/verify-email/'+id+'/'+hash,{headers:header})
     }

     edit(data:any):Observable<UserData>{
      const headers = new HttpHeaders({'Authorization': 'Bearer ' +localStorage.getItem('token')})

       return this.http.post<UserData>('https://rubabikia-project.herokuapp.com/api/editProfile',data,{headers})
     }

//  addedprudect(product:Product){
//     console.log(product.name);
//    this.user.product?.push(product);
// }


    getUsers(userIDs:Number[]){
      const body = { 'id':userIDs};
      const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

      return this.http.post<User[]>('https://rubabikia-project.herokuapp.com/api/userbyId',body,{headers});
    }
    getSenderById(senderID:Number){
      return this.http.get<UserData>('https://rubabikia-project.herokuapp.com/api/user/'+senderID);

    }
    getReciverById(receiverID:Number){
      return this.http.get<UserData>('https://rubabikia-project.herokuapp.com/api/user/'+receiverID);

    }


    buyProduct(product:Product):Observable<NotificationData>{
      const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
      const body = { 'product_id':product.id,'seller_id':product.userid};

      return this.http.post<NotificationData>('https://rubabikia-project.herokuapp.com/api/buy/'+product.id,body,{headers}).pipe(
        tap(()=>{
          this._refreshNeeded.next()
        })
      )



    }
    request(id:number):Observable<NotificationData>{
      const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

      return this.http.get<NotificationData>('https://rubabikia-project.herokuapp.com/api/notification/'+id,{headers})
    }

    accept(nof:Notifi):Observable<Notifi[]>{
      console.log(nof);
      const headers=new HttpHeaders({
        'content-type' : 'application/json',
        // 'Content-Type':'multipart/form-data',
        'Access-Control-Allow-Origin' : '*',
        'Authorization':'Bearer '+localStorage.getItem('token')
      });

      return this.http.post<Notifi[]>('https://rubabikia-project.herokuapp.com/api/purchases/'+nof.id_not,nof,{headers}).pipe(
        tap(()=>{
          this._refreshNeeded.next()
        })
      )

    }
    reject(id:number):Observable<Notifi[]>{
      const headers=new HttpHeaders({
        'content-type' : 'application/json',
        // 'Content-Type':'multipart/form-data',
        'Access-Control-Allow-Origin' : '*',
        'Authorization':'Bearer '+localStorage.getItem('token')
      });

      return this.http.delete<Notifi[]>('https://rubabikia-project.herokuapp.com/api/nof/'+id,{headers}).pipe(
        tap(()=>{
          this._refreshNeeded.next()
        })
      )

    }


    acceptmessage(nof:Notifi):Observable<AcceptedmessageData>{
      const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
      const body = { 'productname':nof.name,'productimage':nof.image,'buyer_id':nof.buyer_id};

      return this.http.post<AcceptedmessageData>('https://rubabikia-project.herokuapp.com/api/accept/'+nof.id_not,body,{headers}).pipe(
        tap(()=>{
          this._refreshNeeded.next()
        })
      )



    }
    acceptedmessages():Observable<AcceptedmessageData>{
      const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

      return this.http.get<AcceptedmessageData>('https://rubabikia-project.herokuapp.com/api/acceptedmessages',{headers})
    }

    // for acceptresponse
    ok(id:number):Observable<Acceptedmessage[]>{
      const headers=new HttpHeaders({
        'content-type' : 'application/json',
        // 'Content-Type':'multipart/form-data',
        'Access-Control-Allow-Origin' : '*',
        'Authorization':'Bearer '+localStorage.getItem('token')
      });

      return this.http.delete<Acceptedmessage[]>('https://rubabikia-project.herokuapp.com/api/acceptedmessages/'+id,{headers}).pipe(
        tap(()=>{
          this._refreshNeeded.next()
        })
      )

    }

    storefeedData(formData:any,id:any):Observable<Feedback[]>{
      const headers=new HttpHeaders({
        'Authorization':'Bearer '+localStorage.getItem('token')
      });
      return this.http.post<Feedback[]>('https://rubabikia-project.herokuapp.com/api/feedbacks/'+id,formData,{
        headers:headers
      });
    }
    gerallfeedData(id:any):Observable<FeedbackData>{

      return this.http.get<FeedbackData>('https://rubabikia-project.herokuapp.com/api/feedbacksdata/'+id);
    }

    // getallfeedbacks():Observable<FeedbackData>{

    //   return this.http.get<FeedbackData>('http://127.0.0.1:8000/api/feedbacksdata');
    // }
    getallusers():Observable<UsersData>{
      const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
      return this.http.get<UsersData>('https://rubabikia-project.herokuapp.com/api/usersss',{headers});
    }


  rejectmessage(nof:Notifi):Observable<RejectedmessageData>{
   const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
   const body = { 'productname':nof.name,'productimage':nof.image,'buyer_id':nof.buyer_id};

      return this.http.post<RejectedmessageData>('https://rubabikia-project.herokuapp.com/api/reject/'+nof.id_not,body,{headers}).pipe(
        tap(()=>{
          this._refreshNeeded.next()
        })
      )
 }
 rejectedmessages():Observable<RejectedmessageData>{
  const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

  return this.http.get<RejectedmessageData>('https://rubabikia-project.herokuapp.com/api/rejectedmessages',{headers})
}
// for rejectresponse
okay(id:number):Observable<Rejectedmessage[]>{
  const headers=new HttpHeaders({
    'content-type' : 'application/json',
    // 'Content-Type':'multipart/form-data',
    'Access-Control-Allow-Origin' : '*',
    'Authorization':'Bearer '+localStorage.getItem('token')
  });

  return this.http.delete<Rejectedmessage[]>('https://rubabikia-project.herokuapp.com/api/rejectedmessages/'+id,{headers})
  .pipe(
    tap(()=>{
      this._refreshNeeded.next()
    })
  )

}
getAllgovernorates():Observable<Governorate[]>{
  return this.http.get<Governorate[]>('https://rubabikia-project.herokuapp.com/api/governorates');

}
deleteUser(userid:number){
  const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

  return this.http.delete('https://rubabikia-project.herokuapp.com/api/users/'+userid,{headers});
}
 storeusermessage(formdata:any):Observable<Usermessage[]>{
  const headers=new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem('token')
  });
  return this.http.post<Usermessage[]>('https://rubabikia-project.herokuapp.com/api/usermessages',formdata,{
    headers:headers
  });
}
getallusermessages():Observable<UsermessageData>{
  const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
  return this.http.get<UsermessageData>('https://rubabikia-project.herokuapp.com/api/usermessages',{headers});
}
storeadminmessage(formdata:any,id:number):Observable<Adminmessage[]>{
  const headers=new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem('token')
  });
  return this.http.post<Adminmessage[]>('https://rubabikia-project.herokuapp.com/api/adminmessages/'+id,formdata,{
    headers:headers
  });
}
getalladminmessages():Observable<AdminmessageData>{
  const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
  return this.http.get<AdminmessageData>('https://rubabikia-project.herokuapp.com/api/adminmessages',{headers});
}
deleteadminmessage(id:number){
  const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

  return this.http.delete('https://rubabikia-project.herokuapp.com/api/adminmessages/'+id,{headers});
}
deleteusermessage(id:number){
  const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

  return this.http.delete('https://rubabikia-project.herokuapp.com/api/usermessages/'+id,{headers});
}


getAlluserssad():Observable<User[]>{
  return this.http.get<User[]>('https://rubabikia-project.herokuapp.com/api/users');

}

getAllfeeds():Observable<Feedback[]>{
  return this.http.get<Feedback[]>('https://rubabikia-project.herokuapp.com/api/feedbacks');

}
delete(feedback:Feedback){
  // console.log("done");
  return this.http.delete('https://rubabikia-project.herokuapp.com/api/feedbacks/'+feedback.id)

}

}

