import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  constructor(public navCtrl: NavController) {

  }

  pushShare(){
    console.log(111);
    this.navCtrl.push('CreateSharePage');
  }

}
