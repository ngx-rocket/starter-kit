import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';

import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule
  ],
  entryComponents: [
    AboutComponent
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
