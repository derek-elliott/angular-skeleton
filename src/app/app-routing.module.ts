import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthGuard } from '@app/guard/auth.guard';
import { PostsResolverService } from '@app/service/posts-resolver.service';

import { Role } from '@app/schema/user';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
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
        path: 'admin',
        loadChildren: () =>
            import('@modules/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard],
        data: {roles: [Role.Admin]}
      },
      {
        path: '',
        redirectTo: 'blog',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () =>
        import('@modules/auth/auth.module').then(m => m.AuthModule)
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
