import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Content } from '@app/schema/content';
import { JsonApiService } from '@app/service/json-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor (
    private jsonApiService: JsonApiService
  ) {}

  getAll(): Observable<Array<Content>> {
    return this.jsonApiService.get('/projects');
  }

  getSingle(id: number): Observable<Content[]> {
    return this.jsonApiService.get('/projects/' + id);
  }
}
