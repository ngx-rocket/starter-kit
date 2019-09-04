import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { CoreModule } from '@app/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let statusBarSpy: any;
  let splashScreenSpy: any;
  let keyboardSpy: any;

  beforeEach(async(() => {
    statusBarSpy = jest.fn();
    splashScreenSpy = {
      hide: jest.fn()
    };
    keyboardSpy = {
      hideFormAccessoryBar: jest.fn()
    };

    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        TranslateModule.forRoot(),
        CoreModule
      ],
      declarations: [AppComponent],
      providers: [
        { provide: Keyboard, useValue: keyboardSpy },
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }), 30000);
});
