import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { I18nService } from '@app/i18n';


const log = new Logger('App');

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title,
              private translateService: TranslateService,
              private platform: Platform,
              private keyboard: Keyboard,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private i18nService: I18nService) { }

  async ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');


    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        switchMap(route => route.data),
        untilDestroyed(this)
      )
      .subscribe(event => {
        const title = event['title'];
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });


    // Cordova platform and plugins initialization
    await this.platform.ready();
    this.onCordovaReady();
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }

  private onCordovaReady() {
    log.debug('device ready');

    if ((window as any).cordova) {
      log.debug('Cordova init');

      this.keyboard.hideFormAccessoryBar(true);
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    }
  }

}
