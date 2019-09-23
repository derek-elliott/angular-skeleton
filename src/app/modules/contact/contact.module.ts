import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { ContactRoutes } from '@modules/contact/contact.routing';
import { ContactComponent } from '@modules/contact/page/contact/contact.component';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    ContactRoutes,

    SharedModule
  ]
})
export class ContactModule { }
