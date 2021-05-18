import { Component, OnInit } from '@angular/core';
import {  RouterService } from '../router.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: any = {};
message:any = {};
  constructor(private route: RouterService,
     private router: Router,
     private http:HttpClient,
     private toast:ToastrService,
     private spinner: NgxSpinnerService) {
   }

  //  Login Function
  
   login() {
     if (this.route.validate(this.user.email) === true) {
      this.spinner.show();
      setTimeout(() => {
      let apiurl = "https://apifromashu.herokuapp.com/api/login";
      
      this.http.post(apiurl,this.user).subscribe(
        (response:any) => {
          if(response.token){
          this.toast.success("Login Successfully");
          localStorage.setItem("member",JSON.stringify(response));
          this.router.navigate(['/']);    
        }else{
          localStorage.removeItem("member");
        }
      },
        (error) => {
          this.toast.error("Login error");
        })
      this.spinner.hide();
    }, 3000);   
}
    }
  ngOnInit(): void {
  }

}
