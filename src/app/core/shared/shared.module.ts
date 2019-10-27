import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/shared/material.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMasonryModule } from 'ngx-masonry';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faCodeBranch,
  faAsterisk,
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faPlayCircle,
  faRocket,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook,
  faBold,
  faItalic,
  faLink,
  faImage,
  faList,
  faListOl,
  faEye
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(
  faGithub,
  faAsterisk,
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faRocket,
  faPlayCircle,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook,
  faBold,
  faItalic,
  faLink,
  faImage,
  faList,
  faListOl,
  faEye
);

import { ControlMessagesComponent } from '@app/shared/component/control-messages/control-messages.component';
import { SpinnerComponent } from '@app/shared/component/spinner/spinner.component';
import { ModalComponent } from '@app/shared/component/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    NgbModule,
    FontAwesomeModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: true,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
        },
      },
    })
  ],
  declarations: [ControlMessagesComponent, SpinnerComponent, ModalComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule,

    NgbModule,
    FontAwesomeModule,
    NgxMasonryModule,

    ControlMessagesComponent,
    SpinnerComponent,
    ModalComponent
  ],
  entryComponents: [ModalComponent]
})
export class SharedModule {}
