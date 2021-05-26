import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {

  constructor(private shop: CommonService) { }
  
// image property fetching images from common services

  image: any = this.shop.detail;
  
  ngOnInit(): void {
  }

}
