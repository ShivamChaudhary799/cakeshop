import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  searchcakes: any;
  member: any = true;
  constructor(private router: Router,
    private toast: ToastrService,
    private spinner: NgxSpinnerService) { }

// function for searching cakes

  search(){
    if (this.searchcakes) {
      this.spinner.show();
      setTimeout(() => {
        this.router.navigate(["/search"],{queryParams: {q:this.searchcakes}});
        this.spinner.hide();
      }, 2000);
    }
  }

  // logout Function

  logout(){
    localStorage.removeItem("member");
    this.toast.info("Logout Successfully",'',{
      positionClass: 'toast-top-right' 
   } 
    );
  }
  ngDoCheck(){
    if(localStorage.member) {
      this.member = false;
    }
    if(!localStorage.member) {
      this.member = true;
    }
  }

  
  ngOnInit(): void {
  }

}
