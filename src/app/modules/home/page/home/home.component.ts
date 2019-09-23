import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectService } from '@app/service/project.service';
import { Project } from '@app/schema/content';
import { Observable } from 'rxjs';

import { ModalService } from '@app/service/modal.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content: Content[];

  constructor(
    private modalService: ModalService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.content = [
      {
        id: 1,
        title: "Title of Article 1.",
        subtitle: "Subtitle",
        thumbnail: "/assets/images/article-1.jpeg",
        thumbnailAltTxt: "Flags!",
        description: "Description of the first article."
      },
      {
        id: 2,
        title: "Title of Article 2.",
        subtitle: "Subtitle",
        thumbnail: "/assets/images/article-2.jpeg",
        thumbnailAltTxt: "Village!",
        description: "Description of the second article."
      },
      {
        id: 3,
        title: "Title of Article 3",
        subtitle: "Subtitle",
        thumbnail: "/assets/images/article-3.jpeg",
        thumbnailAltTxt: "Aurora!",
        description: "Description of the third article."
      }
    ]
  }
}
