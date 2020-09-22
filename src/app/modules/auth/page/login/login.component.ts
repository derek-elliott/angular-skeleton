import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: string

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  signIn() {
    this.authService.loginWithGoogle();
    this.router.navigate([this.returnUrl]);
  }

  signout() {
    this.authService.logout();
    this.router.navigate([this.returnUrl]);
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
}
