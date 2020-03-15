import { Injectable } from '@angular/core';
import { ContentDataService } from '@app/service/content-data.service';
import { Content } from '@app/schema/content';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<Content> {

  constructor(private postService: ContentDataService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Content> {
    return this.postService.getPost(route.paramMap.get('id'))
  }
}
