import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  personal: any = {};
  total:any = 0;
  constructor(public cs: CommonService,private http:HttpClient) { 
    var api = "https://apifromashu.herokuapp.com/api/cakecart";
    this.http.post(api,{}).subscribe((response:any) => {
    // console.log("add cake to table:",response);
    this.personal.cakes = response.data;
    this.personal.price = this.personal.cakes.reduce((acc:any,e:any) => e.price * e.quantity + acc,0);
    console.log(this.personal);
  },
  (error) => {
    console.log(error);
  });
  }
  ngOnInit(): void {
  }

}
