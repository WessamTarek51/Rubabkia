import { Category } from './../_models/category.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor() { }
  categories:Category[]=[
    {id:1,name:"food",image:"https://source.unsplash.com/random/200x200?sig=1"},
    {id:2,name:"clothing",image:"https://source.unsplash.com/random/200x200?sig=2"},
    {id:3,name:"electric",image:"https://source.unsplash.com/random/200x200?sig=3"},
    {id:4,name:"baby",image:"https://source.unsplash.com/random/200x200?sig=4"},
    {id:5,name:"toys",image:"https://source.unsplash.com/random/200x200?sig=5"},
    {id:6,name:"home",image:"https://source.unsplash.com/random/200x200?sig=6"},
  ]

}
