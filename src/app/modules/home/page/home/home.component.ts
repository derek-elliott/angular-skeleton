import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Content } from '@app/schema/content';
import { Observable } from 'rxjs';

import { Content } from '@app/schema/content';
import { ModalService } from '@app/service/modal.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content: Content[];

  constructor(
    private modalService: ModalService
  ) {}

  ngOnInit(): void {

    this.projectService.getAll().subscribe(content => {
      this.content = content;
    });
  }
}
