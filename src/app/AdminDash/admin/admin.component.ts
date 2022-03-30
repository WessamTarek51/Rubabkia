import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminCategoriesComponent } from '../admin-categories/admin-categories.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private  router:Router) { }


  ngOnInit(): void {
  }



  user() {this.router.navigateByUrl('/admin-users'); };
category() {this.router.navigateByUrl('/admin-categories'); };
products() {this.router.navigateByUrl('/admin-products'); };
message() {this.router.navigateByUrl('/admin-messages'); };
}