import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-my-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() id;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
      console.log(this.id);
  }
}
