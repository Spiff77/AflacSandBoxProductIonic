import { Component, OnInit } from '@angular/core';
import {ProductHttpService} from '../../../product-http.service';
import {Product} from '../../../model/Product';
import {ModalController} from '@ionic/angular';
import {AddProductComponent} from '../ui/add-product/add-product.component';

@Component({
  selector: 'app-simplelistproduct',
  templateUrl: './simplelistproduct.component.html',
  styleUrls: ['./simplelistproduct.component.scss'],
})
export class SimplelistproductComponent implements OnInit {

  pagesize= 4;
  currentpage= 1;

  products: Product[] = [];


  constructor(private httpPL: ProductHttpService, private modal: ModalController) { }

  async ngOnInit(): Promise<void> {
    this.products = await this.httpPL.findAll();
  }

  async delete(id: number): Promise<void>{
    await this.httpPL.delete(id);
    await this.ngOnInit();
  }

  displayScale(){
    const prods = this.products.filter( (prod, i) =>
      i >= (this.currentpage * this.pagesize) && i < (this.pagesize * this.currentpage) + this.pagesize);
    return prods;
  }

  setPage(n: number) {
    this.currentpage += n;
    console.log(this.currentpage);
  }

  async openAddProductModal(): Promise<void> {
    const addmodal = await this.modal.create({
      component: AddProductComponent
    });
    await addmodal.present();

    const {data, role} = await addmodal.onDidDismiss();
    console.log(data, role);
    if(role === 'SAVE'){
      await this.httpPL.add(data);
      await this.ngOnInit();
    }
  }
}
