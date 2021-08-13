import {Component, OnInit} from '@angular/core';
import {ActionPerformed, PushNotifications, PushNotificationSchema} from '@capacitor/push-notifications';
import {ToastController} from '@ionic/angular';
import {SwUpdate} from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private toatController: ToastController, private update: SwUpdate) {}

  ngOnInit(): void {

    this.update.available.subscribe(s => window.location.reload());

   /* PushNotifications.requestPermissions().then( async result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
        const toast = await this.toatController.create({message: 'Unable to register notification', duration: 3000});
        toast.present();
      }
    });

    PushNotifications.addListener('registration', async token => {
      const toast = await this.toatController.create({message: 'You succesfully are registered to the messaging service', duration: 3000});
      toast.present();
    });

    PushNotifications.addListener('pushNotificationReceived',async (notification: PushNotificationSchema) => {
      const toast = await this.toatController.create({message: notification.body, duration: 3000});
      toast.present();
    });

    PushNotifications.addListener('pushNotificationActionPerformed',async (aciton: ActionPerformed) => {
      const toast = await this.toatController.create({message: 'Click on notif', duration: 3000});
      toast.present();
    });*/

  }


}
