import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private router: Router,private toast: ToastrService) {
    console.log(localStorage.member);
   }
   
  //  canActivate Function

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):boolean {
    console.log(route,state);
    if(state.url === '/login') {
      if(localStorage.member) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    }
    if (!localStorage.member) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
