import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Content } from '@app/schema/content';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Logger } from '@app/service/logger.service';

const logger = new Logger();

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss']
})
export class ContentDetailsComponent implements OnInit {
  project: Content;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.project = data.project[0];
    });
  }
}
