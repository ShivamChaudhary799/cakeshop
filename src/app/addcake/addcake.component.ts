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

// Function for uploading images

  submit(element:any){
    var myheaders = new HttpHeaders();
    var token = JSON.parse(localStorage.member).token;
    myheaders = myheaders.set('authtoken',token)

    var formData = new FormData();
    formData.append("file",element.target.files[0]);

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
  // Function for adding cakes
  
add(){
  var api = "https://apifromashu.herokuapp.com/api/addcake";
  this.client.post(api,this.addcake).subscribe((response) =>{
    console.log("cake added:",response);
  },(error) => {
    console.log(error);
  })  
}

  ngOnInit(): void {
  }

}
