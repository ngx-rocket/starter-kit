import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LanguageSelectorComponent } from './language-selector.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  declarations: [
    LanguageSelectorComponent,
  ],
  exports: [
    LanguageSelectorComponent,
  ]
})
export class I18nModule { }
