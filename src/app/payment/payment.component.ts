import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  orderdata:any;
  personal: any = {};
  constructor(public cs: CommonService,
    private http:HttpClient,
    private route: ActivatedRoute,
    private router: Router) {
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

  checkout(){
    var api = "https://apifromashu.herokuapp.com/api/addcakeorder";
    this.http.post(api,this.personal).subscribe((response:any) => {
      console.log(response);
      this.orderdata = response.order;
    },(error) => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
