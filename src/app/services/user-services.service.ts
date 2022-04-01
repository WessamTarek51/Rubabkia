import { Observable, Subject, tap } from 'rxjs';
import { UserData } from './../_models/data.model';


// import { Product } from './../_models/product.models';

import { User, UsersData } from './../_models/user.models';
import { Injectable } from '@angular/core';
import { Product } from '../_models/product.models';
import { environment } from 'src/environments/environment';
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

    return this.http.delete('http://127.0.0.1:8000/api/deleteproduct/'+product.id,{headers});
  }
//  addedprudect(product:Product){
//     console.log(product.name);
//    this.user.product?.push(product);
// }
authToken: any;
  getData():Observable<UserData>{
    // this.loadToken();
    const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

    return this.http.get<UserData>('http://127.0.0.1:8000/api/profile',{ headers});
  }

  // public loadToken() {
  //   const token = localStorage.getItem('id_token');
  //   this.authToken = token;
  // }



    registeruser(data:any){
    const headers=new HttpHeaders()
  return this.http.post(environment.apiUrl+'/api/register',data,{
    headers:headers
     }
  );
    }
    loginuser(data:any){
      return this.http.post(environment.apiUrl+'/api/login',data)
        }
    forgetpass(email:string){
      return this.http.post(environment.apiUrl+'/api/forget',{email:email})
    }
    resetpass(token:any,password:string,confirmpass:string){
      const data={
        token:token,
        password:password,
        confirmpassword:confirmpass
      }

      return this.http.post(environment.apiUrl+'/api/reset',data)
    }

    verifyemail(token:any):Observable<any>{
     const header = new HttpHeaders({'Content-Type':'application/json','Authorization': 'Bearer ' + token})
      return this.http.post(environment.apiUrl+'/api/email/verification-notification',null,{headers:header})
    }
    completeverify(token:any,id:any,hash:any):Observable<any>{
      const header = new HttpHeaders({'Content-Type':'application/json','Authorization': 'Bearer ' + token})

       return this.http.get(environment.apiUrl+'/api/verify-email/'+id+'/'+hash,{headers:header})
     }

     edit(data:any):Observable<UserData>{
      const headers = new HttpHeaders({'Authorization': 'Bearer ' +localStorage.getItem('token')})

       return this.http.post<UserData>(environment.apiUrl+'/api/editProfile',data,{headers})
     }

//  addedprudect(product:Product){
//     console.log(product.name);
//    this.user.product?.push(product);
// }


    getUsers(userIDs:Number[]){
      const body = { 'id':userIDs};
      const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

      return this.http.post<User[]>('http://127.0.0.1:8000/api/userbyId',body,{headers});
    }
    getSenderById(senderID:Number){
      return this.http.get<UserData>('http://127.0.0.1:8000/api/user/'+senderID);

    }
    getReciverById(receiverID:Number){
      return this.http.get<UserData>('http://127.0.0.1:8000/api/user/'+receiverID);

    }


    buyProduct(product:Product):Observable<NotificationData>{
      const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
      const body = { 'product_id':product.id,'seller_id':product.userid};

      return this.http.post<NotificationData>(environment.apiUrl+'/api/buy/'+product.id,body,{headers}).pipe(
        tap(()=>{
          this._refreshNeeded.next()
        })
      )



    }
    request(id:number):Observable<NotificationData>{
      const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

      return this.http.get<NotificationData>(environment.apiUrl+'/api/notification/'+id,{headers})
    }

    accept(nof:Notifi):Observable<Notifi[]>{
      console.log(nof);
      const headers=new HttpHeaders({
        'content-type' : 'application/json',
        // 'Content-Type':'multipart/form-data',
        'Access-Control-Allow-Origin' : '*',
        'Authorization':'Bearer '+localStorage.getItem('token')
      });

      return this.http.post<Notifi[]>(environment.apiUrl+'/api/purchases/'+nof.id_not,nof,{headers}).pipe(
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

      return this.http.delete<Notifi[]>(environment.apiUrl+'/api/nof/'+id,{headers}).pipe(
        tap(()=>{
          this._refreshNeeded.next()
        })
      )

    }


    acceptmessage(nof:Notifi):Observable<AcceptedmessageData>{
      const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
      const body = { 'productname':nof.name,'productimage':nof.image,'buyer_id':nof.buyer_id};

      return this.http.post<AcceptedmessageData>(environment.apiUrl+'/api/accept/'+nof.id_not,body,{headers}).pipe(
        tap(()=>{
          this._refreshNeeded.next()
        })
      )



    }
    acceptedmessages():Observable<AcceptedmessageData>{
      const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

      return this.http.get<AcceptedmessageData>(environment.apiUrl+'/api/acceptedmessages',{headers})
    }

    // for acceptresponse
    ok(id:number):Observable<Acceptedmessage[]>{
      const headers=new HttpHeaders({
        'content-type' : 'application/json',
        // 'Content-Type':'multipart/form-data',
        'Access-Control-Allow-Origin' : '*',
        'Authorization':'Bearer '+localStorage.getItem('token')
      });

      return this.http.delete<Acceptedmessage[]>(environment.apiUrl+'/api/acceptedmessages/'+id,{headers}).pipe(
        tap(()=>{
          this._refreshNeeded.next()
        })
      )

    }

    storefeedData(formData:any,id:any):Observable<Feedback[]>{
      const headers=new HttpHeaders({
        'Authorization':'Bearer '+localStorage.getItem('token')
      });
      return this.http.post<Feedback[]>('http://127.0.0.1:8000/api/feedbacks/'+id,formData,{
        headers:headers
      });
    }
    gerallfeedData(id:any):Observable<FeedbackData>{

      return this.http.get<FeedbackData>('http://127.0.0.1:8000/api/feedbacksdata/'+id);
    }

    // getallfeedbacks():Observable<FeedbackData>{

    //   return this.http.get<FeedbackData>('http://127.0.0.1:8000/api/feedbacksdata');
    // }
    getallusers():Observable<UsersData>{
      const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
      return this.http.get<UsersData>('http://127.0.0.1:8000/api/users',{headers});
    }


  rejectmessage(nof:Notifi):Observable<RejectedmessageData>{
   const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
   const body = { 'productname':nof.name,'productimage':nof.image,'buyer_id':nof.buyer_id};

      return this.http.post<RejectedmessageData>(environment.apiUrl+'/api/reject/'+nof.id_not,body,{headers}).pipe(
        tap(()=>{
          this._refreshNeeded.next()
        })
      )
 }
 rejectedmessages():Observable<RejectedmessageData>{
  const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

  return this.http.get<RejectedmessageData>(environment.apiUrl+'/api/rejectedmessages',{headers})
}
// for rejectresponse
okay(id:number):Observable<Rejectedmessage[]>{
  const headers=new HttpHeaders({
    'content-type' : 'application/json',
    // 'Content-Type':'multipart/form-data',
    'Access-Control-Allow-Origin' : '*',
    'Authorization':'Bearer '+localStorage.getItem('token')
  });

  return this.http.delete<Rejectedmessage[]>(environment.apiUrl+'/api/rejectedmessages/'+id,{headers})
  .pipe(
    tap(()=>{
      this._refreshNeeded.next()
    })
  )

}
getAllgovernorates():Observable<Governorate[]>{
  return this.http.get<Governorate[]>('http://127.0.0.1:8000/api/governorates');

}
deleteUser(userid:number){
  const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

  return this.http.delete('http://127.0.0.1:8000/api/users/'+userid,{headers});
}
 storeusermessage(formdata:any):Observable<Usermessage[]>{
  const headers=new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem('token')
  });
  return this.http.post<Usermessage[]>('http://127.0.0.1:8000/api/usermessages',formdata,{
    headers:headers
  });
}
getallusermessages():Observable<UsermessageData>{
  const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
  return this.http.get<UsermessageData>('http://127.0.0.1:8000/api/usermessages',{headers});
}
storeadminmessage(formdata:any,id:number):Observable<Adminmessage[]>{
  const headers=new HttpHeaders({
    'Authorization':'Bearer '+localStorage.getItem('token')
  });
  return this.http.post<Adminmessage[]>('http://127.0.0.1:8000/api/adminmessages/'+id,formdata,{
    headers:headers
  });
}
getalladminmessages():Observable<AdminmessageData>{
  const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
  return this.http.get<AdminmessageData>('http://127.0.0.1:8000/api/adminmessages',{headers});
}
deleteadminmessage(id:number){
  const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

  return this.http.delete('http://127.0.0.1:8000/api/adminmessages/'+id,{headers});
}
deleteusermessage(id:number){
  const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')})

  return this.http.delete('http://127.0.0.1:8000/api/usermessages/'+id,{headers});
}
}

