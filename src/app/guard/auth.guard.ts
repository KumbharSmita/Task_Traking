
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService,
    private router: Router,
    private toastr:ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.IsloggedIn()) {

      if(route.url.length>0){
        let menu=route.url[0].path;
        if(menu=='user'){
          if(this.service.GetUserRole()=='admin'){
            return true;
          }else{
            this.toastr.warning('you dont have access');
            this.router.navigate(['']);
            return false;
          }
        }else{
          return true;
        }
      }else{
        return true;
      }
    } else {
      return this.router.parseUrl('/login');
      return false; // Navigate to the login page
    }
  }
}
