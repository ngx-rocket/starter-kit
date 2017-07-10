import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { CoreModule } from '../core/core.module';
import { ShellComponent } from './shell.component';
import { HomeModule } from '../home/home.module';
import { AboutModule } from '../about/about.module';
import { LoginModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    HomeModule,
    AboutModule,
    LoginModule,
    IonicModule
  ],
  entryComponents: [
    ShellComponent
  ],
  declarations: [
    ShellComponent
  ]
})
export class ShellModule { }
