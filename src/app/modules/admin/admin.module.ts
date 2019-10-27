import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { AdminRoutingModule } from '@modules/admin/admin.routing';
import { AdminComponent } from '@modules/admin/page/admin/admin.component';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
