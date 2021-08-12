import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandboxPage } from './sandbox.page';
import {TestlistComponent} from './testlist/testlist.component';
import {InfoComponent} from './info/info.component';
import {ModalexampleComponent} from './modalexample/modalexample.component';

const routes: Routes = [
  {
    path: 'testlist',
    component: TestlistComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'modal',
    component: ModalexampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandboxPageRoutingModule {}
