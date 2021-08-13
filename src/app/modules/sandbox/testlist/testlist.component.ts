import { Component, OnInit } from '@angular/core';
import {ActionSheetController, AnimationController} from '@ionic/angular';

@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.scss'],
})
export class TestlistComponent implements OnInit {

  constructor( private asControler: ActionSheetController, private animationController: AnimationController) { }

  ngOnInit() {}

  callAction(fav: string) {
    console.log(fav);
  }

  async showSheet() {
    const as = await this.asControler.create({
      buttons: [{
        text: 'Delete',
        icon: 'trash',
        role: 'DELETE'
      },
        {
          text: 'Delete',
          icon: 'trash',
          handler: () => {
            console.log('CALL HTTP QUERY');
          }
        }
      ],
      header: 'Action?',
    });
    await as.present();
  }
}
