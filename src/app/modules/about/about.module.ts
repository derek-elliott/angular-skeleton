import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { AboutRoutingModule } from '@modules/about/about.routing';
import { AboutComponent } from '@modules/about/page/about/about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
