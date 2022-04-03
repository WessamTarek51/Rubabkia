import { Category,getAllCategoryData } from '../_models/category.models';
import { Product,getAllProductsData } from '../_models/product.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject,tap } from 'rxjs';
import { environment } from 'src/environments/environment';
//

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private _refreshNeeded=new Subject<void>();
  get refreshNeeded(){
       return this._refreshNeeded
  }
  constructor(private http:HttpClient) { }
  categories:Category[]=[];
  // [
  //   {id:1,name:"food",image:"https://source.unsplash.com/random/200x200?sig=1"},
  //   {id:2,name:"clothing",image:"https://source.unsplash.com/random/200x200?sig=2"},
  //   {id:3,name:"electric",image:"https://source.unsplash.com/random/200x200?sig=3"},
  //   {id:4,name:"baby",image:"https://source.unsplash.com/random/200x200?sig=4"},
  //   {id:5,name:"toys",image:"https://source.unsplash.com/random/200x200?sig=5"},
  //   {id:6,name:"home",image:"https://source.unsplash.com/random/200x200?sig=6"},
  // ]
  getAllcategories():Observable<getAllCategoryData>{
    return this.http.get<getAllCategoryData>('https://rubabikia-project.herokuapp.com/api/categories');

  }
  addcategory(data:any):Observable<Category[]>{
    return this.http.post<Category[]>('https://rubabikia-project.herokuapp.com/api/categoriess',data);

  }

  updatecat(id:number,data:any):Observable<Category[]>{
    console.log(data);
    return this.http.post<Category[]>('https://rubabikia-project.herokuapp.com/api/editcat/'+id,data);
  }
    getCtId(categoryId:any){
    // console.log("done");
    return this.http.get('https://rubabikia-project.herokuapp.com/api/categories/'+categoryId);

  }
  delete(category:Category){
    // console.log("done");
    return this.http.delete('https://rubabikia-project.herokuapp.com/api/categories/'+category.id)

  }
}
