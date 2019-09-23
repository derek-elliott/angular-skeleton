import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '@app/schema/project';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {
  project$: Observable<Project>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.project$ = this.route.data.pipe(map(data => data.project));
  }
}
