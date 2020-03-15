import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';

import { Content } from '@app/schema/content';
import { ModalService } from '@app/service/modal.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content: Content[];

  constructor(
    private modalService: ModalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(
        data => {
            this.content = data.content;
    });
  }
}
