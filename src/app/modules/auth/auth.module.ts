import { NgModule } from '@angular/core';
import { LoginComponent } from '@modules/auth/page/login/login.component';
import { SharedModule } from '@app/shared/shared.module';

import { AuthRoutingModule } from '@modules/auth/auth.routing';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
