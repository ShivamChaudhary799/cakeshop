import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
addcard:any = [];
  constructor(public cs: CommonService,
    private spinner: NgxSpinnerService) { 

      // For loading Spinner
      
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
  }
  ngOnInit(): void {
  }

}
