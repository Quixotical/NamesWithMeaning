import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Traits page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-traits',
  templateUrl: 'traits.html'
})
export class TraitsPage {

  gender:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gender = navParams.get('gender');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TraitsPage');
  }

}
