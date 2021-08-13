import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {TestlistComponent} from './modules/sandbox/testlist/testlist.component';
import {AccountsComponent} from './modules/sandbox/accounts/accounts.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductPageModule)
  },
  {
    path: 'sandbox',
    loadChildren: () => import('./modules/sandbox/sandbox.module').then(m => m.SandboxPageModule)
  },
  {
    path:'', redirectTo: 'sandbox/accounts', pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
