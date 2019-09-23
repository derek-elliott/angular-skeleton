import { NgModule } from '@angular/core';

import { HomeComponent } from '@modules/home/page/home/home.component';
import { HomeRoutingModule } from '@modules/home/home.routing';

import { SharedModule } from '@app/shared/shared.module';
import { ContentItemComponent } from '@modules/home/page/content-item/content-item.component';
import { ContentDetailsComponent } from '@modules/home/page/content-details/content-details.component';

@NgModule({
    declarations: [
        HomeComponent,
        ContentItemComponent,
        ContentDetailsComponent
    ],
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    exports: [],
    providers: []
})
export class HomeModule {}
