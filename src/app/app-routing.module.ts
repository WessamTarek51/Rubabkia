import { FavProductsComponent } from './pages/fav-products/fav-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatUserComponent } from './chat/chat-user/chat-user.component';
import { HomeComponent } from './home/home/home.component';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsofcategoryComponent } from './pages/productsofcategory/productsofcategory.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ListchatComponent } from './chat/chat-user/listchat/listchat.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'show/:id',component:ProductDetailsComponent},
  // {path:'profile/1',component:ProfileComponent},
  {
  path:'profile',component:ProfileComponent,
  canActivate:[AuthGuard]
  },
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent },
  {path:'profile/:id',component:ProfileComponent, canActivate:[AuthGuard]},
  {path:'chat',component:ChatUserComponent},
  {path:'fav',component:FavProductsComponent},
  {path:'add',component:AddEditComponent},
  {path:'edit/:id',component:AddEditComponent},
  {path:'category/:id',component:ProductsofcategoryComponent,children:[
    {path:'show/:id',component:ProductDetailsComponent},

  ]},
  {path:'profile/',children:[
  {path:'edit/:id',component:AddEditComponent},
]
},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'message',component:ListchatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
