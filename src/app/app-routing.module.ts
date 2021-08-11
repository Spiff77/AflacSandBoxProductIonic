import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TestlistComponent} from './modules/sandbox/testlist/testlist.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductPageModule)
  },
  {
    path: 'sandbox',
    loadChildren: () => import('./modules/sandbox/sandbox.module').then(m => m.SandboxPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
