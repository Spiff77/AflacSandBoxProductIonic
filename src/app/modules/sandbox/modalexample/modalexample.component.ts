import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CustommodalComponent} from './custommodal/custommodal.component';

@Component({
  selector: 'app-modalexample',
  templateUrl: './modalexample.component.html',
  styleUrls: ['./modalexample.component.scss'],
})
export class ModalexampleComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  async giveSomeLorem(): Promise<void> {
    const modal = await this.modal.create({
      component: CustommodalComponent
    });
    return await modal.present();
  }
}
