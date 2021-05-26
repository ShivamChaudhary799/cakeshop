import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RouterService } from '../router.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
data: any = [];
cakeids:any = {};
  constructor(private client:HttpClient,
    private toast: ToastrService,
    private route: RouterService,
    private router:ActivatedRoute,
    private rout:Router) { 

      // for getting all cake through API

    var api = "https://apifromashu.herokuapp.com/api/allcakes";
    this.client.get(api).subscribe((response: any) => {
      console.log("response from admin", response);
      this.data = response.data;
    },
    (error) => {
      console.log(error);
    })
  }
  
  // Function for editing cakes data

  edit(cakeid:any){
    console.log(cakeid);
    this.rout.navigate(['/admin/edit',cakeid])
  }
  
  ngOnInit(): void {
  }

}
