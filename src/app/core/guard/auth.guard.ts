import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '@app/service/auth.service';
import {Role} from '@app/schema/user';
import {NotificationService} from '@app/service/notification.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private note: NotificationService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const authUser = await this.auth.getAuthUser();
    const loggedIn = !!authUser;
    if(!loggedIn) {
      this.note.error('Please Log in');
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
      return loggedIn;
    }

    const user = await this.auth.getUserData(authUser.uid);

    user.subscribe(user => {
      if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
        this.note.error('Unauthorized');
        this.router.navigate(['/']);
        return false;
      }
    });
    return loggedIn;
  }
}
