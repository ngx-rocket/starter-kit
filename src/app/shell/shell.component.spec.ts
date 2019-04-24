import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { AuthenticationService, CredentialsService, CoreModule } from '@app/core';
import { MockAuthenticationService } from '@app/core/authentication/authentication.service.mock';
import { MockCredentialsService } from '@app/core/authentication/credentials.service.mock';

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
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
    .overrideComponent(ShellComponent, {
        set: {
          entryComponents: [HomeComponent, AboutComponent, SettingsComponent]
        }
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
