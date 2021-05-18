import { Component, OnInit } from '@angular/core';
import {  RouterService } from '../router.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
user:any = {};
  constructor(private route: RouterService, private router: Router,private http:HttpClient) { }
  forgot() {
    console.log(this.user);
     if (this.route.validate(this.user.email) === true) {
      this.router.navigate(['/']);
     }
      let apiurl = "https://apifromashu.herokuapp.com/api/recoverpassword";
      
      this.http.post(apiurl,{email:this.user.email}).subscribe(
        (response:any) => {
          console.log("response from signupApi",response);       
        },
        (error) => {
          console.log(error);
        })
        
    }
  ngOnInit(): void {
  }

}
