import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrls: ['./addcake.component.css']
})
export class AddcakeComponent implements OnInit {
addcake: any = {categories: "",type : ""};
  constructor(private client: HttpClient) { }


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
      this.addcake.image = response.imageUrl;
    },
    (error) => {
      console.log(error);
    })
  }
add(){
  var api = "https://apifromashu.herokuapp.com/api/addcake";
  this.client.post(api,this.addcake).subscribe((response) =>{
    console.log("cake added:",response);
  },(error) => {
    console.log(error);
  })
  console.log(this.addcake);
  
}

  ngOnInit(): void {
  }

}
