import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private toast:ToastrService) { }

  // HTTPInterceptor
  
  intercept(request : HttpRequest<any> , next : HttpHandler){
    if(localStorage.member){
      request = request.clone({
        setHeaders:{
          authtoken:JSON.parse(localStorage.member).token
        }
      })
    }
    return next.handle(request);
  }
}
