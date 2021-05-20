import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivate } from '../deactivate.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements CanComponentDeactivate {
personal: any = {};
  constructor(public cs: CommonService,
    private http:HttpClient,
    private route: ActivatedRoute,
    private router: Router) {
    var api = "https://apifromashu.herokuapp.com/api/cakecart";
    this.http.post(api,{}).subscribe((response:any) => {
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
      this.cs.placeorder = true;
      this.router.navigate(['checkout/confirm']);
    },(error) => {
      console.log(error);
    })
  }
  canDeactivate(){
  return confirm('I want to Discard!!');
  }

  ngOnInit(): void {
  }

}
