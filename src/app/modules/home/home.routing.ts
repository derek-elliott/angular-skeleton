import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@modules/home/page/home/home.component';
import { ContentDetailsComponent } from '@modules/home/page/content-details/content-details.component';
import { PostResolverService } from '@app/service/post-resolver.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'content/:id',
    component: ContentDetailsComponent,
    resolve: {
      content: PostResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
