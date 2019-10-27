import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: Subject<string>;

  constructor() {
    this.theme = new Subject<string>();
    this.theme.next('my-light-theme');
  }

  setTheme(theme: string) {
    this.theme.next(theme);
  }

  getTheme(): Observable<string> {
    return this.theme;
  }
}
