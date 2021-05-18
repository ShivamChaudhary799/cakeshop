import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
// mail:any = JSON.parse(localStorage.member);


  constructor(private router: Router) {
    console.log(localStorage.member);
   }
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
