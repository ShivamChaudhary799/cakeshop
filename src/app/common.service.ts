import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  placeorder: any = false;
  confirm: any = false;
  // Property for carousal images
detail: any = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGQHzNK3TvBamOrywD1zs9VmIvLymJBQ86g&usqp=CAU",
  "assets/carausal10.jpg",
  "assets/carausal6.jpg",
  "assets/carausal5.jpg",
  "assets/carausal8.jpg",
];

// cards: any = [
//   {id: 1,image: "assets/card1.jpg",name:"Princess Barbie Truffle Cake", weight:"1kg", Price: 1999, eggless:false},
//   {id: 2,image: "assets/card2.jpg",name:"Fresh Vanilla Cream Cake", weight:"1/2 kg", Price: 699, eggless:true},
//   {id: 3,image: "assets/card3.jpg",name:"Chocolate Fudge Cake", weight:"1/2 kg", Price: 599, eggless:true},
//   {id: 4,image: "assets/card4.jpg",name:"Creamy French Vanilla Cake", weight:"1kg", Price: 899, eggless:false},
//   {id: 5,image: "assets/card5.jpg",name:"White & Red Roses Designer Chocolate Cake", weight:"1kg", Price: 1099, eggless:true},
//   {id: 6,image: "assets/card6.jpg",name:"Esculent Black Forest Cake", weight:"1/2 kg", Price: 649, eggless:false},
//   {id: 7,image: "assets/card7.jpg",name:"Red Velvet Fresh Cream Cake", weight:"1kg", Price: 1199, eggless:true},
//   {id: 8,image: "assets/card8.jpg",name:"Bigwishbox Chocolate Truffle Cake", weight:"1kg", Price: 499, eggless:false},
//   {id: 9,image: "assets/card9.jpg",name:"Designer Chocolate Cream Cake", weight:"1/2 kg", Price: 700, eggless:true},
//   {id: 10,image: "assets/card10.jpg",name:"Chocolate Caramel Fudge Cake", weight:"1/2 kg", Price: 500, eggless:false}
// ];

// Property for fetching cakes through API
data:any=[];
  constructor(private route: Router,private http:HttpClient) {;
    let url = "https://apifromashu.herokuapp.com/api/allcakes";
    this.http.get(url).subscribe(
      (response:any) => {
        console.log("response of cakes",response);
        this.data = response.data;
        console.log(this.data);
        
      },
      (error) => {
        console.log(error);
      })
    }
}


