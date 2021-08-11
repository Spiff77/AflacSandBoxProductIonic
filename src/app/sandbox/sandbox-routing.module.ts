import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandboxPage } from './sandbox.page';
import {TestlistComponent} from './testlist/testlist.component';

const routes: Routes = [
  {
    path: 'testlist',
    component: TestlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandboxPageRoutingModule {}
