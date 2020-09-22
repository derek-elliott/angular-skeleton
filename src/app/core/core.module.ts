import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from '@app/guard/auth.guard';
import { NoAuthGuard } from '@app/guard/no-auth.guard';
import { throwIfAlreadyLoaded } from '@app/guard/module-import.guard';

import { ErrorInterceptor } from '@app/interceptor/error.interceptor';


import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    AuthGuard,
    NoAuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
