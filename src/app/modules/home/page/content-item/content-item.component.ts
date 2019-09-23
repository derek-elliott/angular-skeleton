import { Component, Input } from '@angular/core';

import { Content } from '@app/schema/content';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent {
  @Input() content: Content;
}
