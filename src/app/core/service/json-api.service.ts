import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  constructor(private http: HttpClient) {}

  apiUrl: string = environment.apiUrl;

  get(url: string): Observable<any> {
    return this.http.get(this.apiUrl + url);
  }
}
