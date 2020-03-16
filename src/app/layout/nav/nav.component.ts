import { Component, OnInit } from '@angular/core';

import { environment } from '@env';
import { Observable } from 'rxjs';
import { ThemeService } from '@app/service/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public version = environment.version;
  public title = environment.pageTitle;
  public theme: Observable<string>;
  public isDarkTheme = false

  navItems = [
    { link: '/blog', title: 'Blog' },
    { link: '/about', title: 'About' },
    { link: '/contact', title: 'Contact' },
    // { link: '/admin', title: 'Admin Console'}
  ];

  constructor(private themeService: ThemeService) {}

  public checked: boolean;

  ngOnInit() {}

  toggleTheme(checked: boolean) {
    if(checked){
      this.isDarkTheme = true;
      this.themeService.setTheme("my-dark-theme");
    } else {
      this.isDarkTheme = false;
      this.themeService.setTheme("my-light-theme");
    }
  }
}
