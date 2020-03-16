import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NoAuthGuard } from '@app/guard/no-auth.guard';
import { PostsResolverService } from '@app/service/posts-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: [
      {
        path: 'blog',
        loadChildren: () =>
          import('@modules/home/home.module').then(m => m.HomeModule),
        resolve: {
          content: PostsResolverService
        }
      },
      {
        path: 'about',
        loadChildren: () =>
          import('@modules/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('@modules/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: '',
        redirectTo: 'blog',
        pathMatch: 'full'
      }
    ]
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: 'blog', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
