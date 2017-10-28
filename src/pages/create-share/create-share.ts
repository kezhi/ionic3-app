import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the CreateSharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-share',
  templateUrl: 'create-share.html',
})
export class CreateSharePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateSharePage');
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
