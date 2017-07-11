import 'rxjs/add/operator/filter';

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  navRoot: Component;
  subscription: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.updateNav(this.activatedRoute);

    // Bind Ionic navigation to Angular router events
    this.subscription = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(() => this.updateNav(this.activatedRoute));
  }

  private updateNav(route: ActivatedRoute) {
    // First child is always IonicApp component
    route = route.firstChild;
    if (route.component === ShellComponent) {
      route = route.firstChild;
      this.navRoot = route.component;
    }
  }

}
