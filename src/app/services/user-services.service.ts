import { Observable } from 'rxjs';
import { UserData } from './../_models/data.model';
// import { Product } from './../_models/product.models';

import { User } from './../_models/user.models';
import { Injectable } from '@angular/core';
import { Product } from '../_models/product.models';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders} from '@angular/common/http';



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
  deleteProductOfUser(product:Product){
    return this.http.delete('http://127.0.0.1:8000/api/products/'+product.id);
  }
//  addedprudect(product:Product){
//     console.log(product.name);
//    this.user.product?.push(product);
// }
authToken: any;
  getData(){
    // this.loadToken();
    const headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+localStorage.getItem('token')});

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
}
