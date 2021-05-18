import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  detail:any = [];
  constructor(private router:ActivatedRoute,
    private common:CommonService,
    private client:HttpClient,
    private toast:ToastrService,
    private route:Router) {
      this.display();
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

  next(){
    this.common.placeorder = true;
    this.route.navigate(['/checkout/orderdetail']);
  }

  ngOnInit(): void {
  }

}
