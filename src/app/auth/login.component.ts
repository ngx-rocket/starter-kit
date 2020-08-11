import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';
import { AuthenticationService } from './authentication.service';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  version: string | null = environment.version;
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    const currentRoute = this.router.url;
    if (currentRoute.includes('login-results')) {
      this.authenticationService.getUserInfo().subscribe((results: any) => {
        if (results) {
          this.router.navigate([this.route.snapshot.queryParams.redirect || '/'], { replaceUrl: true });
        }
      });
    } else {
      this.authenticationService.login();
    }
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
