import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleServiceService } from './example-service.service';

import { ListExampleRoutingModule } from './list-example-routing.module';
import { ListExampleComponent } from './list-example.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListExampleComponent],
  imports: [CommonModule, ListExampleRoutingModule, NgbModalModule, DataTablesModule, FormsModule ],
  providers: [ExampleServiceService],
})
export class ListExampleModule {}
