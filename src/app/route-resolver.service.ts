import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteResolverService implements Resolve<any> {
  constructor(private http: HttpClient) { }
  
// route resolver
  resolve(route: ActivatedRouteSnapshot) {
    return this.http.post("https://apifromashu.herokuapp.com/api/cakecart",{});
  } 
}
