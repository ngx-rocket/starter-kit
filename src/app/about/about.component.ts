import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { environment } from '../../environments/environment';

@IonicPage()
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }

}
