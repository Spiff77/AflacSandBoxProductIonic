import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-delete-box',
  templateUrl: './delete-box.component.html',
  styleUrls: ['./delete-box.component.scss'],
})
export class DeleteBoxComponent implements OnInit {
  @Input() itemName: any;
  @Input() itemId: any;
  @Input() itemCategory: any;

  constructor(private modal: ModalController) { }

  ngOnInit() {}

  closeModal(action: string) {
    this.modal.dismiss(action);
  }
}
