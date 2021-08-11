import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPage } from './product.page';
import {SimplelistproductComponent} from './simplelistproduct/simplelistproduct.component';

const routes: Routes = [
  {
    path: 'simplelist',
    component: SimplelistproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}
