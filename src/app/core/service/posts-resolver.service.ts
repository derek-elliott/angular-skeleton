import { Injectable } from '@angular/core';
import { Content } from '@app/schema/content';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ContentDataService } from '@app/service/content-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsResolverService implements Resolve<Content[]> {

  constructor(private postService: ContentDataService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Content[]> {
    return this.postService.getPosts()
  }
}