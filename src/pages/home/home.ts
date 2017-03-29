import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isOn: boolean = false;

  constructor(private flashlight: Flashlight, public navCtrl: NavController) {

  }

  // Return a boolean to determine if flashlight is available
  async isAvailable(): Promise<boolean> {
    try {
      return await this.flashlight.available();
    }
    catch(e) {
      console.log(e);
    }
  }

  // Toggle the flashlight to an on or off state
  async toggleFlash(): Promise<void> {
    try {
      let available = await this.isAvailable();
      if (available) {
        await this.flashlight.toggle();
        this.isOn != this.isOn;
      } else {
        console.log("Flashlight is not available.")
      }
    }
    catch(e) {
      console.log(e);
    }
  }

}
