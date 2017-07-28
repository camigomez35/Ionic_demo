import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  foto: any=""
  existe: boolean = false
  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
              private camera: Camera) {

  }

  saludar(){
      let alert = this.alertCtrl.create({
        title: "Hello",
        subTitle: "Esto es Angular Medellin",
        buttons: ["Ok"]
      });
      alert.present();
  }

  captura(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  compartir(){
    console.log("Compartir")
  }


}
