import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SandboxPageRoutingModule } from './sandbox-routing.module';

import { SandboxPage } from './sandbox.page';
import {TestlistComponent} from './testlist/testlist.component';
import {InfoComponent} from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SandboxPageRoutingModule
  ],
  declarations: [SandboxPage, TestlistComponent, InfoComponent]
})
export class SandboxPageModule {}
