/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { browser, element, by } from 'protractor';

export class ShellPage {
  welcomeText = element(by.css('app-root mat-card-title'));

  getParagraphText() {
    return this.welcomeText.getText();
  }
}
