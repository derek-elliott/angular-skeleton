import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';

import { User } from '@app/schema/user';

interface LoginContextInterface {
  username: string;
  password: string;
  token: string;
}

const defaultUser = {
  username: 'admin',
  password: 'admin123',
  token: '12345'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  login(loginContext: LoginContextInterface): Observable<User> {
    if (
      loginContext.username === defaultUser.username &&
      loginContext.password === defaultUser.password
    ) {
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
