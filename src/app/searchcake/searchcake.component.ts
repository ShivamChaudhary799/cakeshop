import { Component, OnInit } from '@angular/core';
import{ CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchcake',
  templateUrl: './searchcake.component.html',
  styleUrls: ['./searchcake.component.css']
})
export class SearchcakeComponent implements OnInit {
  price: any = {}
searchdata: any = [];
teststring:any = "";

// function for filtering cake type

searchcakes: any = [...this.cs.data];
  constructor(private cs:CommonService,private route:ActivatedRoute,private client: HttpClient) { 
    console.log("query params are:",this.route.snapshot.queryParams);
    this.route.queryParams.subscribe((queryparams) =>{
      this.teststring = queryparams.q;
      const api = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + this.teststring;
      this.client.get(api).subscribe((response:any) => {
        this.searchdata = response.data;
        this.searchcakes = [...response.data]
      },
      (error) => {
        console.log(error);
        
      })
      
    })
    
  }
  cakeType = this.cs.data;

  // function for filtering according to prices

  cakesort(){
    if(this.price.min || this.price.max){
      this.searchcakes = this.searchdata.filter((e:any) => 
        (this.price.min ? e.price >= this.price.min : true) &&
        (this.price.max ? e.price <= this.price.max : true)
      )
      
    }
  }
  ngOnInit(): void {
  }

}
