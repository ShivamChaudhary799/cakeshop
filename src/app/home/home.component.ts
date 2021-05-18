import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
addcard:any = [];
  constructor(public cs: CommonService) { 
  // this.addcard = this.cs.data;
  }
  ngOnInit(): void {
  }

}
