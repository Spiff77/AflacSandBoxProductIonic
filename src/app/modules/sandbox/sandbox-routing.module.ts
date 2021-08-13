import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TestlistComponent} from './testlist/testlist.component';
import {InfoComponent} from './info/info.component';
import {ModalexampleComponent} from './modalexample/modalexample.component';
import {PicturesComponent} from './pictures/pictures.component';
import {SignpadComponent} from './signpad/signpad.component';
import {AccountsComponent} from './accounts/accounts.component';

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
  },
  {
    path: 'picture',
    component: PicturesComponent
  },
  {
    path: 'sign',
    component: SignpadComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandboxPageRoutingModule {}
