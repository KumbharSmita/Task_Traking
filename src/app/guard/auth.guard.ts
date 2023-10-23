// import { Injectable } from '@angular/core';
// import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../service/auth.service';
// import { ToastrService } from 'ngx-toastr';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private service: AuthService, private router: Router, private toastr: ToastrService) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if (this.service.IsloggedIn()) {
//       this.router.navigate(['home']);
//       return true;
//     } else {
//       this.router.navigate(['login']);
//       return false;
//     }
//   }
// }


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.IsloggedIn()) {
      return true;
    } else {
      // If the user is not logged in, you can return a UrlTree to navigate to the login page.
      // Alternatively, you can use the Router to navigate asynchronously.
      // For example:
      // this.router.navigate(['login']);
      return this.router.parseUrl('/login'); // Navigate to the login page
    }
  }
}
