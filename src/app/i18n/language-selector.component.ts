import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TextFieldTypes } from '@ionic/core';
import { AlertController } from '@ionic/angular';

import { I18nService } from './i18n.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  @Input() type = 'icon';
  @Input() itemClass = '';

  constructor(
    private alertController: AlertController,
    private translateService: TranslateService,
    private i18nService: I18nService
  ) { }

  ngOnInit() { }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  async changeLanguage() {
    const alertController = await this.alertController.create({
      header: this.translateService.instant('Change language'),
      inputs: this.i18nService.supportedLanguages.map(language => ({
        type: 'radio' as TextFieldTypes,
        name: language,
        label: language,
        value: language,
        checked: language === this.i18nService.language
      })),
      buttons: [
        {
          text: this.translateService.instant('Cancel'),
          role: 'cancel'
        },
        {
          text: this.translateService.instant('Ok'),
          handler: language => {
            this.i18nService.language = language;
          }
        }
      ]
    });
    alertController.present();
  }

}

