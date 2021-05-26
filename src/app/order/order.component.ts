import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderdetail:any = [];
  personal: any = {};
  constructor(public cs: CommonService,private client:HttpClient) { 
    
    // for fetching cakeorder details through API

   var api = "https://apifromashu.herokuapp.com/api/cakeorders";
   this.client.post(api,{}).subscribe((response:any) => {
     this.orderdetail = response.cakeorders;
     this.orderdetail.forEach((e:any) => {
       const date = new Date(e.orderdate);
       e.orderdate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
     });
   },(error) => {
     console.log(error);
   })
  }

  buydetail(i:any) {
    document.querySelector(`#buy${i}`)?.classList.toggle('hidden');
  }
  ngOnInit(): void {
  }

}
