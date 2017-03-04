import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SetupServices } from './setup.services';

import { GenderSelectionPage } from '../pages/gender-selection/gender-selection';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = GenderSelectionPage;

  constructor(platform: Platform, public setupServices: SetupServices) {
    platform.ready().then(() => {

      setupServices.setupApp().then(

      );


      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }


}
