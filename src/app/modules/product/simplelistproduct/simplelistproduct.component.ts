import { Component, OnInit } from '@angular/core';
import {ProductHttpService} from '../../../product-http.service';
import {Product} from '../../../model/Product';

@Component({
  selector: 'app-simplelistproduct',
  templateUrl: './simplelistproduct.component.html',
  styleUrls: ['./simplelistproduct.component.scss'],
})
export class SimplelistproductComponent implements OnInit {

  products: Product[] = [];

  constructor(private httpPL: ProductHttpService) { }

  async ngOnInit(): Promise<void> {
    this.products = await this.httpPL.findAll();
  }

  async delete(id: number): Promise<void>{
    await this.httpPL.delete(id);
    await this.ngOnInit();
  }

}
