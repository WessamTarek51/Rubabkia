import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
export class AdminAuthGuard implements CanActivate{
    token!:any;
    isadmin!:any;
constructor (private router:Router){

}
  canActivate():any {
     
    this.token=localStorage.getItem('token');
     this.isadmin=localStorage.getItem('is_admin')
    if(this.token&&this.isadmin){
        return true;
    }
    else if(!this.token){
        this.router.navigate(['login'])
    }
    else if(!this.isadmin){
        this.router.navigate(['**'])
    }
    
}
}