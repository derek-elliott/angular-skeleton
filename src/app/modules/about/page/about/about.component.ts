import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NotificationService } from '@app/service/notification.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {

  constructor(public noteService: NotificationService) {}
}
