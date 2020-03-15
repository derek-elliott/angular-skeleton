import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Content } from '@app/schema/content';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class ContentDataService {

  private _contentURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Content[]>(this._contentURL);
  }

  getPost(id: string) {
    return this.http.get<Content>(this._contentURL + '/' + id);
  }
}
