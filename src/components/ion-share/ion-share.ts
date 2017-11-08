import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the IonShareComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-share',
  templateUrl: 'ion-share.html'
})
export class IonShareComponent {

  text: string;

  constructor(public actionSheetCtrl: ActionSheetController) {
    console.log('Hello IonShareComponent Component');
    this.text = 'Hello World';
  }


  moreShare(){
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'QQ空间',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '朋友圈',
          role: '',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: '新浪微博',
          handler: () => {
            console.log('Archive clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
