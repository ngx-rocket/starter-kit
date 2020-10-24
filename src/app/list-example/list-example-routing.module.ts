import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListExampleComponent } from './list-example.component';

const routes: Routes = [{ path: '', component: ListExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListExampleRoutingModule {}
