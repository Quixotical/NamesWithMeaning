import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, private http: Http) {
    platform.ready().then(() => {


      this.getStuff().subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  getStuff(){

      return this.http.get('http://localhost:3000/traits')
        .map((res:Response) => res.json());

  }
}
