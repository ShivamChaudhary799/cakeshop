import { Component, OnInit } from '@angular/core';
import {  RouterService } from '../router.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
users:any = {};
message:any = {};
  constructor(private route: RouterService, private router: Router,private http:HttpClient,private toastr: ToastrService) { }

  // function for httpApi

  register() {
    if (this.route.validate(this.users.email) === true){

    let apiurl = "https://apifromashu.herokuapp.com/api/register";
    
    this.http.post(apiurl,this.users).subscribe(
      (response:any) => {
        this.toastr.success(response.message,"response from signupApi");
        if(response.message === "User Already Exists"){
          this.router.navigate(['/login']);
          this.message = response.message;
        }      
      },
      (error) => {
        console.log(error);
      })
      
  }
}
  ngOnInit(): void {
  }

}
