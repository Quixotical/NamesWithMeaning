import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TraitsPage } from '../traits/traits';
/*
  Generated class for the GenderSelection page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gender-selection',
  templateUrl: 'gender-selection.html'
})
export class GenderSelectionPage {
  male:string = 'male';
  female:string = 'female';
  neutral:string = 'neutral';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}



  ionViewDidLoad() {
    console.log('ionViewDidLoad GenderSelectionPage');
  }

  selectedGender(gender:string){

    this.navCtrl.push(TraitsPage, {
      'gender': gender
    });

  }

}
