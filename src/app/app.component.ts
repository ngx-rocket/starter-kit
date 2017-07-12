import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { IonicApp, Nav, Platform } from 'ionic-angular';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Globalization } from '@ionic-native/globalization';

import { environment } from '../environments/environment';
import { Logger } from './core/logger.service';
import { I18nService } from './core/i18n.service';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(Nav) nav: Nav;
  navRoot: Component;

  constructor(private platform: Platform,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private keyboard: Keyboard,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private globalization: Globalization,
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

    const onNavigationEnd = this.router.events.filter(event => event instanceof NavigationEnd);

    // Change page title on navigation or language change, based on route data
    Observable.merge(this.translateService.onLangChange, onNavigationEnd)
      .map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe(event => {
        const title = event['title'];
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });

    // Bind Ionic navigation to Angular router events
    onNavigationEnd.subscribe(() => this.updateNav(this.activatedRoute));

    // Cordova platform and plugins initialization
    this.platform.ready().then(() => this.onCordovaReady());
  }

  private onCordovaReady() {
    if (window['cordova']) {
      this.keyboard.hideKeyboardAccessoryBar(true);
      this.statusBar.styleDefault();
      this.globalization.getPreferredLanguage().then(language => {
        log.debug(`Setting language using device locale ${language.value}`);
        this.i18nService.language = language.value;
      });
      this.splashScreen.hide();
    }
  }

  private updateNav(route: ActivatedRoute) {
    if (route.component === IonicApp) {
      route = route.firstChild;
      if (this.nav.root !== route.component) {
        this.navRoot = route.component;
      }
    }
  }

}
