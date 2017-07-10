import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicPageModule.forChild(AboutComponent)
  ],
  entryComponents: [
    AboutComponent
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
