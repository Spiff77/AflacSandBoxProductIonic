import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import {SimplelistproductComponent} from './simplelistproduct/simplelistproduct.component';
import {AddProductComponent} from './ui/add-product/add-product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProductPageRoutingModule
  ],
  declarations: [ProductPage, SimplelistproductComponent, AddProductComponent]
})
export class ProductPageModule {}
