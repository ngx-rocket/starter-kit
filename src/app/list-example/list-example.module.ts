import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleServiceService } from './example-service.service';


import { ListExampleRoutingModule } from './list-example-routing.module';
import { ListExampleComponent } from './list-example.component';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ListExampleComponent],
  imports: [CommonModule, ListExampleRoutingModule, DataTablesModule],
  providers: [ExampleServiceService],
})
export class ListExampleModule {}
