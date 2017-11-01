import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  text: string;

  constructor(public modalCtrl: ModalController) {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
  }

}
