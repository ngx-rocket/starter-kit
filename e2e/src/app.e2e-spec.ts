import { browser } from 'protractor';
import { LoginPage } from './page-objects/login.po';
import { AppSharedPage } from './page-objects/app-shared.po';
import { ShellPage } from './page-objects/shell.po';

describe('when the app loads', () => {
  const login = new LoginPage();
  const app = new AppSharedPage();
  const shell = new ShellPage();

  beforeAll(async () => {
    await app.navigateAndSetLanguage();
  });

  it('should display the login page', async () => {
    expect(await browser.getCurrentUrl()).toContain('/login');
  });

  describe('and the user logs in', () => {
    beforeAll(async () => {
      await login.login();
    });

    it('should display the hello message', async () => {
      expect(await shell.getParagraphText()).toEqual('Hello world !');
    });
  });
});
