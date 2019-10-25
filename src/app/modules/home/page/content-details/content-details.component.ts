import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Content } from '@app/schema/content';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {
  project$: Observable<Content>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.project$ = this.route.data.pipe(map(data => data.project));
  }
}
