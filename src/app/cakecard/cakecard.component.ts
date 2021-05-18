import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cakecard',
  templateUrl: './cakecard.component.html',
  styleUrls: ['./cakecard.component.css']
})
export class CakecardComponent implements OnInit {
// data:any;
// for adding cakecards
@Input() cakes:any;
  constructor(public card: CommonService,private route: Router,private http:HttpClient) { 
  
  }
  

  // function for getting id from url

  getdata(i:any){
    this.route.navigate(['/cakes',i]);
  }
  ngOnInit(): void {
  }

}
