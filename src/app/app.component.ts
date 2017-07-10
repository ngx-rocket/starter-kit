import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { environment } from '../environments/environment';
import { Logger } from './core/logger.service';
import { I18nService } from './core/i18n.service';
import { ShellComponent } from './shell/shell.component';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public rootPage: any = ShellComponent;

  constructor(private platform: Platform,
              private keyboard: Keyboard,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private titleService: Title,
              private translateService: TranslateService,
              private i18nService: I18nService) { }

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    // Change page title on navigation or language change, based on route data
    // const onNavigationEnd = this.router.events.filter(event => event instanceof NavigationEnd);
    // Observable.merge(this.translateService.onLangChange, onNavigationEnd)
    //   .map(() => {
    //     let route = this.activatedRoute;
    //     while (route.firstChild) {
    //       route = route.firstChild;
    //     }
    //     return route;
    //   })
    //   .filter(route => route.outlet === 'primary')
    //   .mergeMap(route => route.data)
    //   .subscribe(event => {
    //     const title = event['title'];
    //     if (title) {
    //       this.titleService.setTitle(this.translateService.instant(title));
    //     }
    //   });

    // Cordova platform and plugins initialization
    this.platform.ready().then(() => {

      if (window['cordova']) {
        this.keyboard.hideKeyboardAccessoryBar(true);
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
    });
  }

}
