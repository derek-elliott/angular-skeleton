import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@modules/auth/page/login/login.component';
import { RegisterComponent } from '@modules/auth/page/register/register.component';
import { SharedModule } from '@app/shared/shared.module';

import { AuthRoutingModule } from '@modules/auth/auth.routing';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
