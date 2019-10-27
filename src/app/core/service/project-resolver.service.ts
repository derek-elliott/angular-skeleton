import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Content } from '@app/schema/content';
import { ProjectService } from '@app/service/project.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolver implements Resolve<Content[]> {
  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.projectService.getSingle(route.params['id']);
  }
}
