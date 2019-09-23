import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '@app/schema/project';
import { JsonApiService } from '@app/service/json-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor (
    private jsonApiService: JsonApiService
  ) {}

  getAll(): Observable<Array<Project>> {
    return this.jsonApiService.get('/projects');
  }

  getSingle(id: number): Observable<Project> {
    return this.jsonApiService.get('/projects/' + id);
  }
}
