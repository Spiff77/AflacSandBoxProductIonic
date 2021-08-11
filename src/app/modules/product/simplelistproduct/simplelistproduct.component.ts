import { Component, OnInit } from '@angular/core';
import {ProductHttpService} from '../../../product-http.service';
import {Product} from '../../../model/Product';

@Component({
  selector: 'app-simplelistproduct',
  templateUrl: './simplelistproduct.component.html',
  styleUrls: ['./simplelistproduct.component.scss'],
})
export class SimplelistproductComponent implements OnInit {

  pagesize= 4;
  currentpage= 1;

  products: any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];


  constructor(private httpPL: ProductHttpService) { }

  async ngOnInit(): Promise<void> {
   // this.products = await this.httpPL.findAll();
  }

  async delete(id: number): Promise<void>{
    await this.httpPL.delete(id);
    await this.ngOnInit();
  }

  displayScale(){
    const prods = this.products.filter( (id, i) => {
      return i >= (this.currentpage * this.pagesize) && i < (this.pagesize * this.currentpage) + this.pagesize;
    });
    return prods;
  }

  setPage(n: number) {
    this.currentpage += n;
    console.log(this.currentpage)
  }
}
