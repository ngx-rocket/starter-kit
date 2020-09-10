import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CoreModule } from '@core';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { MockAuthenticationService } from '@app/auth/authentication.service.mock';
import { MockCredentialsService } from '@app/auth/credentials.service.mock';

import { I18nModule } from '@app/i18n';
import { ShellComponent } from './shell.component';
import { AboutComponent } from '@app/about/about.component';
import { SettingsComponent } from '@app/settings/settings.component';
import { HomeComponent } from '@app/home/home.component';
import { HomeModule } from '@app/home/home.module';
import { AboutModule } from '@app/about/about.module';
import { SettingsModule } from '@app/settings/settings.module';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        I18nModule,
        IonicModule.forRoot(),
        HomeModule,
        AboutModule,
        SettingsModule,
        CoreModule
      ],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        { provide: CredentialsService, useClass: MockCredentialsService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        ShellComponent
      ]
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
