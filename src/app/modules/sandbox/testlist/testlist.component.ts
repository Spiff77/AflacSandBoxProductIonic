import { Component, OnInit } from '@angular/core';
import {ActionSheetController, AnimationController, LoadingController, ViewWillEnter} from '@ionic/angular';
import {PersonService} from '../person.service';
import {User} from '../../../model/user.model';
import {ActivatedRoute} from '@angular/router';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.scss'],
})
export class TestlistComponent implements ViewWillEnter {

  persons: User[]  =  [];
  stored = false;
  pUserName = '';

  constructor( private asControler: ActionSheetController,
               private activatedroute: ActivatedRoute,
               private animationController: AnimationController,
               private personService: PersonService,
               private loadingController: LoadingController) { }


  async ionViewWillEnter() {
    let loading;
    this.activatedroute.queryParamMap.subscribe( async params => {
        loading = await this.loadingController.create({message: 'Please wait...'});
        await loading.present();
          this.stored = params.get('stored') === 'true';
          if(this.stored) {
            const personList = await Storage.get({key: 'persons'});
            this.persons = JSON.parse(personList.value) || [];
            await loading.dismiss();
          }else{
            this.personService.findAll().subscribe( async p =>{
              this.persons = p;
              await loading.dismiss();
            });
          }
      },
      async err => await loading.dismiss()
    );
  }

  async addPerson() {
    const u = new User().assignData({username: this.pUserName});
    if (this.stored) {
      this.persons.push(u);
      await Storage.set({key: 'persons', value: JSON.stringify(this.persons)});
    } else {
      this.personService.add(u).subscribe();
    }
  }

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
