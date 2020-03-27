import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LanguageSelectorComponent } from './language-selector.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    LanguageSelectorComponent,
  ],
  exports: [
    LanguageSelectorComponent,
  ]
})
export class I18nModule { }
