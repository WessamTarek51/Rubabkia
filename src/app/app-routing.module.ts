import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatUserComponent } from './chat/chat-user/chat-user.component';
import { HomeComponent } from './home/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'show',component:ProductDetailsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'chat',component:ChatUserComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
