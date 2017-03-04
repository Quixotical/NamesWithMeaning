import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TraitsPage } from '../traits/traits';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

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

  traitList: Array<String> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    this.getStuff().subscribe(
      (data) => {
        console.log(data);
        let traits = data;
        for(let i =0; i< data.length; i++){
          this.traitList.push(data[i]['trait']);
          console.log(data[i]['trait']);
        }
      },
      (error) => {
        console.log(error);
      }
    );

  }

  getStuff(){

    return this.http.get('http://localhost:3000/traits')
      .map((res:Response) => res.json());

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GenderSelectionPage');
  }

  selectedGender(gender:string){

    this.navCtrl.push(TraitsPage, {
      'gender': gender,
      'traitList': this.traitList
    });

  }

}
