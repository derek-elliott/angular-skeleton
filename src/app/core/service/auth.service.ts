import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { of, Observable, throwError } from 'rxjs';

import { User } from '@app/schema/user';

interface LoginContextInterface {
  username: string;
  password: string;
  token: string;
}

const defaultUser = {
  username: 'admin',
  password: '12345',
  token: '12345'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  token: string;

  login(loginContext: LoginContextInterface): Observable<User> {
    if (
      loginContext.username === defaultUser.username &&
      loginContext.password === defaultUser.password
    ) {
        localStorage.setItem('token', defaultUser.token);
        return of(defaultUser);
    }

    return throwError('Invalid username or password');
  }

  logout(): Observable<boolean> {
    return of(false);
  }

  getToken() {
    return this.getToken;
  }
}
