import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cakedetail',
  templateUrl: './cakedetail.component.html',
  styleUrls: ['./cakedetail.component.css']
})
export class CakedetailComponent implements OnInit {
cake:any;
cakeids:any;
detail: any = {};
// Searching through IDs

  constructor(private router:ActivatedRoute,
    private common:CommonService,
    private client:HttpClient,
    private toast:ToastrService,
    private route:Router) { 
    this.cakeids = +this.router.snapshot.params['cakeId'];
    var api = "https://apibyashu.herokuapp.com/api/cake/"+this.cakeids;
    this.client.get(api).subscribe((response:any) => {
      this.detail = response.data;
    },
    (error) => {
      console.log((error));
    })
  }

  // Adding cakes to carts

  cart() {
    if(!localStorage.member) {
      this.toast.warning('please login first');
      
        this.route.navigate(['/login']);
      
    }
    console.log(this.detail);
    
    if(localStorage.member){
      let obj = {
        cakeid:this.detail.cakeid,
        name:this.detail.name,
        weight:this.detail.weight,
        image:this.detail.image,
        price:this.detail.price
      };
      console.log(obj);

      var myheaders = new HttpHeaders();
    var api = "https://apifromashu.herokuapp.com/api/addcaketocart";
    var token = JSON.parse(localStorage.member).token;
    myheaders = myheaders.set('authtoken',token)
    this.client.post(api,obj,{
      headers:myheaders
    }).subscribe((response) => {
      console.log("add cake to cart:",response);
    },
    (error) => {
      console.log(error);
    })
    }
    
    
  }

  submit(e:any){
    var myheaders = new HttpHeaders();
    var token = JSON.parse(localStorage.member).token;
    myheaders = myheaders.set('authtoken',token)

    var formData = new FormData();
    formData.append("file",e.target.file[0]);

    var api = "https://apifromashu.herokuapp.com/api/upload";
    this.client.post(api,formData,{
      headers:myheaders
    }).subscribe((response) => {
      console.log("Image upload:",response);

    },
    (error) => {
      console.log(error);
    })

  }
  ngOnInit(): void {
  }

}
