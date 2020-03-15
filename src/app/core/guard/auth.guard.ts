import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@app/service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // const currentUser = this.auth.currentUser
    // if (currentUser) {
    //   return true
    // }
    // this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
    return true
  }
}
