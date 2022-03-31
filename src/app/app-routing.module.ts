import { ProductListingComponent } from './content/product-listing/product-listing.component';
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
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { GetstartedComponent } from './pages/getstarted/getstarted.component';
import { ListchatComponent } from './chat/chat-user/listchat/listchat.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminComponent } from './AdminDash/admin/admin.component';
import { AdminCategoriesComponent } from './AdminDash/admin-categories/admin-categories.component';
import { AdminUsersComponent } from './AdminDash/admin-users/admin-users.component';
import { AdminProductsComponent } from './AdminDash/admin-products/admin-products.component';
import { AdminMessagesComponent } from './AdminDash/admin-messages/admin-messages.component';
import { AddEditCategoryComponent } from './AdminDash/add-edit-category/add-edit-category.component';
import { FeedbacksAdminComponent } from './AdminDash/feedbacks-admin/feedbacks-admin.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'show/:id',component:ProductDetailsComponent},
  // {path:'profile/1',component:ProfileComponent},
  {
  path:'profile/:id',component:ProfileComponent,
  canActivate:[AuthGuard]
  },
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent },
  {path:'product',component:ProductListingComponent },
  {path:'admin',component:AdminComponent },
  {path:'admin-categories',component:AdminCategoriesComponent },
  {path:'admin-users',component:AdminUsersComponent },
  {path:'admin-products',component:AdminProductsComponent },
  {path:'admin-messages',component:AdminMessagesComponent },
  {path:'add-edit-cat',component:AddEditCategoryComponent },
  {path:'editcat/:id',component:AddEditCategoryComponent },
  {path:'feedbacks',component:FeedbacksAdminComponent },

  

  {path:'getstarted',component:GetstartedComponent ,canActivate:[AuthGuard]},



  {path:'profile/:id',component:ProfileComponent, canActivate:[AuthGuard]},
  {path:'user/:id',component:UserProfileComponent},


  {path:'chat',component:ChatUserComponent,canActivate:[AuthGuard]},

  {path:'fav/:id',component:FavProductsComponent,canActivate:[AuthGuard]},
  {path:'nof/:id',component:RequestsComponent,canActivate:[AuthGuard]},


  {path:'add',component:AddEditComponent,canActivate:[AuthGuard]},
  {path:'edit/:id',component:AddEditComponent,canActivate:[AuthGuard]},
  {path:'category/:id',component:ProductsofcategoryComponent,children:[
  {path:'show/:id',component:ProductDetailsComponent},

  ]},
  {path:'profile/',children:[
  {path:'edit/:id',component:AddEditComponent,canActivate:[AuthGuard]},
]
},
{path:'editprofile',component:EditprofileComponent,canActivate:[AuthGuard]},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'message/:id',component:ListchatComponent,canActivate:[AuthGuard]},
{path:'loading',component:LoadingComponent,canActivate:[AuthGuard]},
{path:'requests',component:RequestsComponent,canActivate:[AuthGuard]},
{path:'feedbacks/:id',component:FeedbackComponent,canActivate:[AuthGuard]},
{path:'**',component:NotfoundComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
