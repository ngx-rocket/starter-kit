import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as auth0 from 'auth0-js';

import { Credentials, CredentialsService } from './credentials.service';
import { environment } from '@env/environment';

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private auth0: auth0.WebAuth;
  private authOptions: auth0.AuthOptions;

  constructor(private credentialsService: CredentialsService) {
    this.authOptions = {
      domain: environment.domain,
      clientID: environment.client_id,
    };

    // Set-up the authentication flow
    this.auth0 = new auth0.WebAuth(this.authOptions);
  }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login() {
    // Replace by proper authentication call
    this.auth0.authorize({
      redirectUri: `${window.location.origin}/login-results`,
      responseType: 'token id_token',
    });
  }

  getUserInfo(): Observable<any> {
    return new Observable((observer: { complete: () => void; next: (arg0: any) => void }) =>
      this.auth0.parseHash({ hash: window.location.hash }, (err, authResult) => {
        if (err) {
          console.log(err);
          observer.complete();
        }

        this.auth0.client.userInfo(authResult.accessToken, (error: any, user: any) => {
          if (error) {
            console.log(err);
            observer.complete();
          }
          this.credentialsService.setCredentials(user);
          observer.next(user);
        });
      })
    );
  }

  isAuthenticated(): boolean {
    return this.getUserInfo() != null;
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout() {
    // Customize credentials invalidation here
    this.auth0.logout({ returnTo: `${window.location.origin}/login` });
  }
}
