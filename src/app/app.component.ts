import { Component, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '@app/service/theme.service';

import { Logger } from '@app/service/logger.service';

const logger = new Logger()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public theme = 'my-light-theme';

  constructor(private themeService: ThemeService, private overlayContainer: OverlayContainer) {}

  ngOnInit() {
    logger.info(this.overlayContainer)
    if (this.overlayContainer) {
      logger.debug('Adding theme to overlay container: ', this.theme);
      this.overlayContainer.getContainerElement().classList.add(this.theme);
    }

    this.themeService.getTheme().subscribe(theme => {
      this.theme = theme;
      if (this.overlayContainer){
        logger.debug('Switching theme inside overlay conditional:', this.theme);
        const classList = this.overlayContainer.getContainerElement().classList;
        const toRemove = Array.from(classList).filter((item: string) =>
          item.includes('-theme')
        );
        if (toRemove.length) {
          classList.remove(...toRemove);
        }
        classList.add(this.theme);
      }
    });
  }
}
