import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cakeshop';
  constructor(private http: HttpClient) {
    var api = "https://apifromashu.herokuapp.com/api/getuserdetails";
    this.http.get(api).subscribe((response:any) => {
      console.log(response);
      
    },
    (error) => {
      if(error.ok === false) {
        localStorage.clear();
      }
      console.log(error);
      
    })
  }
}
