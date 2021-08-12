import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductHttpService} from '../../../../product-http.service';
import {SupplierHttpService} from '../../../../supplier-http.service';
import {Supplier} from '../../../../model/Supplier';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  form: FormGroup;
  suppliers: Supplier[] = [];


  constructor(private modal: ModalController,
              private fb: FormBuilder,
              private productService: ProductHttpService,
              private supplierService:  SupplierHttpService,
  ) { }

  async ngOnInit() {
    this.form = this.fb.group({
      active: [false],
      category: '',
      description: '',
      name: '',
      price: 0,
      promo: 0,
      supplier: this.fb.group({
        id: ['']
      })
    });

    this.suppliers = await this.supplierService.findAll();
    console.log(this.suppliers);
  }

  closeModal(action: string) {
    this.modal.dismiss(this.form.value, action);
  }

}
