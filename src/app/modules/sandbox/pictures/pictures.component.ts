import {Component, OnInit} from '@angular/core';
import {Camera, CameraResultType, Photo} from '@capacitor/camera';
import {AlertController} from '@ionic/angular';
import {Directory, Filesystem} from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
})
export class PicturesComponent implements OnInit {

  pics: Photo[] = [];
  fileNames: string[] = [];

  constructor(private alert: AlertController) { }

  async ngOnInit() {
    await this.loadPic();
    console.log(this.pics);
  }

  async takeSelfie() {
    const pic = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      quality: 70
    });

    const savedpic =await this.savePic(pic);
    this.pics.unshift(savedpic);

    Storage.set({
      key: 'PHOTOS',
      value: JSON.stringify(this.pics)
    });
  }

  async removePic(p: Photo) {
    const alert = await this.alert.create({
      header: 'Delete',
      message: 'You are about to delete a picture',
      backdropDismiss: false,
      buttons: [{
        text: 'OK',
        handler: () => {
          const index = this.pics.indexOf(
            this.pics.find(c => p)
          );
          this.pics.splice(index, 1);
        }
      },
        'cancel']
    });
    alert.present();
  }

  async savePic(photo: Photo) {

    const fileName = 'capture' + new Date().getTime() + '.jpeg';
    this.fileNames.push(fileName);
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: photo.base64String,
      directory: Directory.Data
    });
    return {
      path: fileName,
      webPath: photo.webPath,
      format: 'jpeg'
    };
  }

  async loadPic() {
    const pics = await Storage.get({key: 'PHOTOS'});
    this.pics = JSON.parse(pics.value) || [];


    for (const photo of this.pics) {
      const read = await Filesystem.readFile({
        path: photo.path,
        directory: Directory.Data,
      });
      photo.webPath =  `data:image/jpeg;base64,${read.data}`;
    }
  }
}
