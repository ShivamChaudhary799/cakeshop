import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-cakecart',
  templateUrl: './cakecart.component.html',
  styleUrls: ['./cakecart.component.css']
})
export class CakecartComponent implements OnInit {
detail:any = [];
  constructor(private router:ActivatedRoute,
    private common:CommonService,
    private client:HttpClient,
    private toast:ToastrService,
    private route:Router,
    private spinner: NgxSpinnerService) {
      this.spinner.show();
      setTimeout(() => {
        this.display();
        this.spinner.hide();
      }, 3000);   
  }
  display() {
    var api = "https://apifromashu.herokuapp.com/api/cakecart";
      this.client.post(api,{}).subscribe((response:any) => {
      console.log("add cake to table:",response);
      this.detail = response.data;
    },
    (error) => {
      console.log(error);
    })
  }
  
  remove(i:any) {
    console.log(i);
    
    var api = "https://apifromashu.herokuapp.com/api/removecakefromcart";
    this.client.post(api, { cakeid:i } ).subscribe((response: any) => {
      console.log("response from removecart", response);
      this.toast.success("Record removed!!!");
      if (response.message = "Removed  item from cart") {
        this.display();
  }
    },
    (error) => {
      console.log(error);
    })
  }


  ngOnInit(): void {

  }
}

