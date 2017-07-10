import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],
})
export class SharedModule { }
