import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { RouterService } from '../router.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
editdata: any = {};
editdetail: any = {};
cakeids:any;
  constructor(private client:HttpClient,
    private toast: ToastrService,
    private route: RouterService,
    private router:ActivatedRoute) { 

      // for fetching data through ids

      this.cakeids = this.router.snapshot.params.cakeId;
      var api = "https://apifromashu.herokuapp.com/api/cake/"+this.cakeids;
      this.client.get(api).subscribe((response:any) => {
        this.editdata = response.data;
        console.log(this.cakeids);
        console.log("edit",response);
      },
      (error) => {
        console.log((error));
      })
    }
    
    
// function for uploading images

  submit(e:any){
    var myheaders = new HttpHeaders();
    var token = JSON.parse(localStorage.member).token;
    myheaders = myheaders.set('authtoken',token)

    var formData = new FormData();
    formData.append("file",e.target.files[0]);

    var api = "https://apifromashu.herokuapp.com/api/upload";
    this.client.post(api,formData,{
      headers:myheaders
    }).subscribe((response:any) => {
      console.log("Image upload:",response);
      this.editdata.image = response.imageUrl;
    },
    (error) => {
      console.log(error);
    })

  }
  
// function for updating cake data records

  update(){
    console.log(this.editdata);
    
  }

  ngOnInit(): void {
  }

}
