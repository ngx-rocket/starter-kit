/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

export class HomePage {
  url = '/home';

  get welcomeText() {
    return cy.get('app-root mat-card-title');
  }
}
