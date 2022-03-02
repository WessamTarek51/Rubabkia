import { FavProductsComponent } from './pages/fav-products/fav-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatUserComponent } from './chat/chat-user/chat-user.component';
import { HomeComponent } from './home/home/home.component';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsofcategoryComponent } from './pages/productsofcategory/productsofcategory.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'show/:id',component:ProductDetailsComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'chat',component:ChatUserComponent},
  {path:'fav',component:FavProductsComponent},
  {path:'add',component:AddEditComponent},
  {path:'edit/:id',component:AddEditComponent},
  {path:'category/:id',component:ProductsofcategoryComponent,children:[
    {path:'show/:id',component:ProductDetailsComponent},

  ]},
  {path:'profile/',children:[
  {path:'edit/:id',component:AddEditComponent},
]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
