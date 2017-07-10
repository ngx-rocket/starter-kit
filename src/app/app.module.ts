import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShellModule } from './shell/shell.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    LoginModule,
    IonicModule.forRoot(AppComponent),
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  bootstrap: [IonicApp]
})
export class AppModule { }
