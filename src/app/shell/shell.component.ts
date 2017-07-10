import { Component, OnInit, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { extract } from '../core/i18n.service';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

interface MenuItem {
  title: string;
  component: Component;
}

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  @ViewChild(Nav) nav: Nav;

  rootNav: Component = HomeComponent;
  menuItems: MenuItem[] = [
    { title: extract('Home'), component: HomeComponent },
    { title: extract('About'), component: AboutComponent }
  ];

  constructor() { }

  ngOnInit() { }

  open(component: Component) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(component);
  }

}
